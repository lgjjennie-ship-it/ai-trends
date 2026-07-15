(function () {
  'use strict';

  /** Replace ⭐️ N/10 with a colored badge in h2, h3, and li elements */
  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';
      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>'
      );
    });
  }

  /** Add semantic classes to tag lines, source lines, and background paragraphs */
  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();

      // Tag line: starts with Tags or 标签 (bold prefix rendered by Markdown)
      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }

      // Source line: pattern like "source · site · date"
      if (/^(rss|reddit|github|hackernews|hn|telegram)\s*·/i.test(text)) {
        p.classList.add('source-line');
        return;
      }
    });
  }

  /** Set up EN/中文 language toggle as a page-level control */
  function setupLanguageToggle() {
    // Create toggle buttons
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.type = 'button';

    var btnZh = document.createElement('button');
    btnZh.textContent = '中文';
    btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);

    // Insert at top of body
    document.body.insertBefore(toggle, document.body.firstChild);

    // Read saved preference, default to zh
    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) { /* noop */ }
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      if (lang === 'en') {
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
      } else {
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
      }
    }

    // Index page: toggle lang-section visibility
    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      if (lang === 'en') {
        enSection.classList.remove('hidden');
        zhSection.classList.add('hidden');
      } else {
        zhSection.classList.remove('hidden');
        enSection.classList.add('hidden');
      }
    }

    // Article page: redirect to the other language version
    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;
      if (lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-zh(\.html)?$/, '-en$1').replace(/-zh\/$/, '-en/');
      } else if (lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-en(\.html)?$/, '-zh$1').replace(/-en\/$/, '-zh/');
      }
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) { /* noop */ }
      if (zhSection && enSection) {
        showSection(lang);
      } else {
        switchArticleLang(lang);
      }
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });

    // Initialize
    updateButtons(currentLang);
    if (zhSection && enSection) {
      showSection(currentLang);
    }
  }

  function buildSidebarToc() {
    var nav = document.createElement('nav');
    nav.className = 'toc-sidebar';

    var postsJson = document.getElementById('jinlan-posts');
    var currentPath = window.location.pathname.replace(/\/$/, '');
    var currentLang = document.documentElement.lang || '';

    if (postsJson) {
      try {
        var posts = JSON.parse(postsJson.textContent);
        var langPosts = posts.filter(function (p) {
          return !currentLang || p.lang === currentLang;
        });

        if (langPosts.length > 0) {
          var dateTitle = document.createElement('div');
          dateTitle.className = 'toc-title';
          dateTitle.textContent = '往期日报';
          nav.appendChild(dateTitle);

          var dateList = document.createElement('ul');
          dateList.className = 'toc-date-list';
          langPosts.forEach(function (p) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = p.url;
            var label = p.date;
            if (p.edition === 'morning') label += ' 早报';
            else if (p.edition === 'evening') label += ' 晚报';
            a.textContent = label;
            var pUrl = p.url.replace(/\/$/, '');
            if (pUrl === currentPath) li.classList.add('active');
            li.appendChild(a);
            dateList.appendChild(li);
          });
          nav.appendChild(dateList);
        }
      } catch (e) { /* noop */ }
    }

    var anchors = document.querySelectorAll('.main-content a[id^="item-"]');
    if (anchors.length >= 3) {
      var items = [];
      anchors.forEach(function (a) {
        var h2 = null;
        var node = a.parentElement.nextElementSibling;
        while (node) {
          if (node.tagName === 'H2') { h2 = node; break; }
          node = node.nextElementSibling;
        }
        if (!h2) return;

        var link = h2.querySelector('a');
        var title = (link ? link.textContent : h2.textContent).trim();
        title = title.replace(/⭐️\s*\d+(?:\.\d+)?\/10/, '').trim();
        if (title.length > 28) title = title.slice(0, 27) + '…';

        items.push({ id: a.id, title: title });
      });

      if (items.length >= 3) {
        var sectTitle = document.createElement('div');
        sectTitle.className = 'toc-title';
        sectTitle.textContent = '本期目录';
        nav.appendChild(sectTitle);

        var sectList = document.createElement('ul');
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = '#' + item.id;
          a.textContent = (idx + 1) + '. ' + item.title;
          a.dataset.target = item.id;
          li.appendChild(a);
          sectList.appendChild(li);
        });
        nav.appendChild(sectList);

        if ('IntersectionObserver' in window) {
          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              var id = entry.target.id;
              if (!id) return;
              var link = sectList.querySelector('a[data-target="' + id + '"]');
              if (!link) return;
              if (entry.isIntersecting) {
                sectList.querySelectorAll('li').forEach(function (li) { li.classList.remove('active'); });
                link.parentElement.classList.add('active');
              }
            });
          }, { rootMargin: '-20% 0px -70% 0px' });

          anchors.forEach(function (a) { observer.observe(a); });
        }
      }
    }

    if (!nav.children.length) return;

    var toggle = document.createElement('button');
    toggle.className = 'toc-toggle';
    toggle.type = 'button';
    toggle.textContent = '目录';
    toggle.setAttribute('aria-label', '切换目录');

    document.body.appendChild(nav);
    document.body.appendChild(toggle);

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    setupLanguageToggle();
    buildSidebarToc();
  });
})();
