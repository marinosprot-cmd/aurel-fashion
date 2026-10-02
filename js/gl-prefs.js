/* Cookie consent banner (EN/EL). Legal baseline 2026-10-02.
   Choice stored in localStorage "glamour_consent" = {v:1, essential:true, analytics:bool, affiliate:bool, ts}.
   Optional scripts can be gated with: <script type="text/plain" data-consent="analytics" data-src="..."></script>
   They are only injected once consent[category] is true. API: window.glamourConsent. */
(function () {
  var KEY = "glamour_consent";
  var listeners = [];
  var consent = read();
  var root, panel, settingsBtn, analyticsBox, affiliateBox;

  function read() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY));
      if (c && c.v === 1) return c;
    } catch (e) {}
    return null;
  }
  function tr(k) { return typeof t === "function" ? t(k) : k; }
  function translate(scope) {
    scope.querySelectorAll("[data-i]").forEach(function (el) { el.textContent = tr(el.dataset.i); });
    scope.querySelectorAll("[data-i-aria]").forEach(function (el) { el.setAttribute("aria-label", tr(el.dataset.iAria)); });
    document.querySelectorAll("meta[data-i-meta]").forEach(function (m) { m.setAttribute("content", tr(m.dataset.iMeta)); });
  }

  function loadGated() {
    if (!consent) return;
    document.querySelectorAll('script[type="text/plain"][data-consent]').forEach(function (s) {
      if (!consent[s.dataset.consent] || s.dataset.loaded) return;
      var n = document.createElement("script");
      if (s.dataset.src) { n.src = s.dataset.src; n.async = true; } else { n.text = s.text; }
      s.dataset.loaded = "1";
      s.parentNode.insertBefore(n, s.nextSibling);
    });
  }

  function save(analytics, affiliate) {
    consent = { v: 1, essential: true, analytics: !!analytics, affiliate: !!affiliate, ts: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(consent)); } catch (e) {}
    hide();
    loadGated();
    listeners.forEach(function (fn) { try { fn(consent); } catch (e) {} });
  }

  function build() {
    if (root) return;
    root = document.createElement("div");
    root.id = "gl-prefs-panel";
    root.className = "glp";
    root.setAttribute("role", "region");
    root.setAttribute("data-i-aria", "ckLabel");
    root.hidden = true;
    root.innerHTML =
      '<div class="glp-inner">' +
        '<p class="glp-text" id="glp-text" data-i="ckText"></p>' +
        '<p class="glp-links"><a href="/privacy" data-i="lgPrivacy"></a><span aria-hidden="true"> · </span><a href="/cookies" data-i="lgCookies"></a></p>' +
        '<div class="glp-panel" id="glp-panel" hidden>' +
          '<h2 class="glp-title" data-i="lgCookieSettings"></h2>' +
          '<div class="glp-row"><label for="glp-essential"><strong data-i="ckEssential"></strong><small data-i="ckEssentialD"></small></label>' +
            '<input type="checkbox" role="switch" id="glp-essential" checked disabled></div>' +
          '<div class="glp-row"><label for="glp-analytics"><strong data-i="ckAnalytics"></strong><small data-i="ckAnalyticsD"></small></label>' +
            '<input type="checkbox" role="switch" id="glp-analytics"></div>' +
          '<div class="glp-row"><label for="glp-affiliate"><strong data-i="ckAffiliate"></strong><small data-i="ckAffiliateD"></small></label>' +
            '<input type="checkbox" role="switch" id="glp-affiliate"></div>' +
          '<button type="button" class="cta glp-save" id="glp-save" data-i="ckSave"></button>' +
        '</div>' +
        '<div class="glp-actions">' +
          '<button type="button" class="cta" id="glp-accept" data-i="ckAccept"></button>' +
          '<button type="button" class="icon-btn" id="glp-reject" data-i="ckReject"></button>' +
          '<button type="button" class="icon-btn" id="glp-settings" aria-expanded="false" aria-controls="glp-panel" data-i="ckSettings"></button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(root);
    panel = root.querySelector("#glp-panel");
    settingsBtn = root.querySelector("#glp-settings");
    analyticsBox = root.querySelector("#glp-analytics");
    affiliateBox = root.querySelector("#glp-affiliate");
    root.querySelector("#glp-accept").addEventListener("click", function () { save(true, true); });
    root.querySelector("#glp-reject").addEventListener("click", function () { save(false, false); });
    root.querySelector("#glp-save").addEventListener("click", function () { save(analyticsBox.checked, affiliateBox.checked); });
    settingsBtn.addEventListener("click", function () { togglePanel(panel.hidden); });
    translate(root);
  }

  function togglePanel(open) {
    panel.hidden = !open;
    settingsBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      analyticsBox.checked = !!(consent && consent.analytics);
      affiliateBox.checked = !!(consent && consent.affiliate);
    }
  }
  function show(withSettings) {
    build();
    translate(root);
    root.hidden = false;
    togglePanel(!!withSettings);
    if (withSettings) analyticsBox.focus();
  }
  function hide() { if (root) root.hidden = true; }

  function openSettings(e) { if (e && e.preventDefault) e.preventDefault(); show(true); }

  window.glamourConsent = {
    get: function () { return consent; },
    has: function (k) { return !!(consent && consent[k]); },
    onChange: function (fn) { listeners.push(fn); },
    open: openSettings
  };
  window.openCookieSettings = openSettings;

  /* Keep meta description in sync with the EN/EL toggle (titles/text use data-i via applyLang). */
  if (typeof window.setLang === "function") {
    var baseSetLang = window.setLang;
    window.setLang = function (next) { baseSetLang(next); translate(document); };
  }

  function init() {
    document.querySelectorAll("[data-cookie-settings]").forEach(function (b) { b.addEventListener("click", openSettings); });
    translate(document);
    if (consent) loadGated(); else show(false);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
