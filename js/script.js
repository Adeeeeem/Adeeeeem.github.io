((global) => 
{
	'use strict';

	const Theme = 
	{
		key: 'portfolio-theme',
		darkVars: '--bg-primary:#0b1121;--bg-secondary:#0f172a;--bg-tertiary:rgba(15,23,42,0.72);--bg-glass:rgba(255,255,255,0.045);--bg-glass-hover:rgba(255,255,255,0.075);--bg-glass-active:rgba(255,255,255,0.11);--bg-elevated:rgba(15,23,42,0.68);--text-primary:#f8fafc;--text-secondary:#b6c2d2;--text-muted:#7c8aa0;--border-glass:rgba(255,255,255,0.09);--border-accent:rgba(129,140,248,0.28);--border-hover:rgba(167,139,250,0.48);--accent:#818cf8;--accent-alt:#a78bfa;--accent-glow:rgba(129,140,248,0.28);--accent-gradient:linear-gradient(135deg,#6366f1,#8b5cf6);--accent-gradient-text:linear-gradient(135deg,#c4b5fd,#67e8f9);--shadow-sm:0 1px 4px rgba(0,0,0,0.28);--shadow-md:0 12px 28px rgba(0,0,0,0.28);--shadow-lg:0 24px 70px rgba(0,0,0,0.42);--shadow-glow:0 0 34px rgba(129,140,248,0.16)',
		lightVars: '--bg-primary:#f8fafc;--bg-secondary:#ffffff;--bg-tertiary:rgba(226,232,240,0.5);--bg-glass:rgba(255,255,255,0.7);--bg-glass-hover:rgba(255,255,255,0.85);--bg-glass-active:rgba(255,255,255,0.95);--bg-elevated:rgba(255,255,255,0.9);--text-primary:#0f172a;--text-secondary:#475569;--text-muted:#94a3b8;--border-glass:rgba(0,0,0,0.08);--border-accent:rgba(99,102,241,0.25);--border-hover:rgba(99,102,241,0.5);--accent:#6366f1;--accent-alt:#8b5cf6;--accent-glow:rgba(99,102,241,0.25);--accent-gradient:linear-gradient(135deg,#4f46e5,#7c3aed);--accent-gradient-text:linear-gradient(135deg,#4f46e5,#7c3aed);--shadow-sm:0 1px 3px rgba(0,0,0,0.06);--shadow-md:0 4px 12px rgba(0,0,0,0.08);--shadow-lg:0 8px 32px rgba(0,0,0,0.1);--shadow-glow:0 0 30px rgba(99,102,241,0.1)',
		init() 
		{
			const saved = localStorage.getItem(this.key);
			this.set(saved || 'light');
			document.querySelector('[data-action="theme"]')?.addEventListener('click', () => this.toggle());
		},
		set(theme) 
		{
			document.documentElement.style.cssText = theme === 'dark' ? this.darkVars : this.lightVars;
			const btn = document.querySelector('[data-action="theme"]');
			if (btn) 
			{
				const lightIcon = btn.querySelector('.theme-icon-light');
				const darkIcon = btn.querySelector('.theme-icon-dark');
				if (lightIcon && darkIcon) 
				{
					lightIcon.style.display = theme === 'dark' ? 'inline' : 'none';
					darkIcon.style.display = theme === 'light' ? 'inline' : 'none';
				}
			}
			localStorage.setItem(this.key, theme);
		},
		toggle() 
		{ this.set(this.get() === 'dark' ? 'light' : 'dark'); },
		get() 
		{ return localStorage.getItem(this.key) || 'light'; }
	};

	const Nav = 
	{
		ticking: false,
		init() 
		{
			document.querySelectorAll('.nav-link').forEach((el) => 
			{
				el.addEventListener('click', (e) => 
				{
					const href = el.getAttribute('href');
					if (href && href.startsWith('#')) 
					{
						e.preventDefault();
						const target = document.querySelector(href);
						if (target) target.scrollIntoView({ behavior: 'smooth' });
						document.querySelector('.nav-links')?.classList.remove('open');
						document.querySelector('.mobile-menu-btn')?.classList.remove('active');
					}
				});
			});
			document.querySelector('[data-action="menu"]')?.addEventListener('click', () => 
			{
				document.querySelector('.nav-links')?.classList.toggle('open');
				document.querySelector('.mobile-menu-btn')?.classList.toggle('active');
			});
			document.addEventListener('scroll', () => 
			{
				if (!this.ticking) 
				{
					requestAnimationFrame(() => 
						{ this.updateActive(); this.handleNavBg(); this.ticking = false; });
					this.ticking = true;
				}
			}, 
			{ passive: true });
			this.handleNavBg();
			this.updateActive();
		},
		updateActive() 
		{
			const scrollY = window.scrollY + 120;
			let activeId = '';
			document.querySelectorAll('.nav-link').forEach((el) => 
			{
				const section = document.getElementById(el.dataset.section);
				if (section && section.offsetTop <= scrollY) activeId = el.dataset.section;
			});
			document.querySelectorAll('.nav-link').forEach((el) => el.classList.toggle('active', el.dataset.section === activeId));
		},
		handleNavBg() 
		{ document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 50); }
	};

	const Motion = 
	{
		observer: null,
		init() 
		{
			const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			if (reduceMotion) 
			{
				document.querySelectorAll('.reveal, .reveal-scale, .stagger-children').forEach((el) => el.classList.add('visible'));
				return;
			}
			this.observer = new IntersectionObserver((entries) => 
			{
				entries.forEach((entry) => 
				{
					if (entry.isIntersecting) 
					{
						entry.target.classList.add('visible');
						this.observer.unobserve(entry.target);
					}
				});
			}, 
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
			document.querySelectorAll('.reveal, .reveal-scale, .stagger-children').forEach((el) => this.observer.observe(el));
			this.initMagneticButtons();
		},
		initMagneticButtons() 
		{
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
			document.querySelectorAll('.btn-primary, .btn-secondary, .link-card').forEach((btn) => 
			{
				const bound = 
				{ el: btn, x: 0, y: 0, active: false };
				btn.addEventListener('mouseenter', () => 
					{ bound.active = true; });
				btn.addEventListener('mousemove', (e) => 
				{
					if (!bound.active) return;
					const rect = btn.getBoundingClientRect();
					const x = e.clientX - rect.left - rect.width / 2;
					const y = e.clientY - rect.top - rect.height / 2;
					const dist = Math.sqrt(x * x + y * y);
					const strength = Math.min(1, (100 - Math.min(dist, 100)) / 100);
					bound.x = x * 0.15 * strength;
					bound.y = y * 0.15 * strength;
					btn.style.transform = `translate(${bound.x}px, ${bound.y}px)`;
				});
				btn.addEventListener('mouseleave', () => 
					{ bound.active = false; btn.style.transform = ''; });
			});
		}
	};

	function init() 
	{
		Theme.init();
		Nav.init();
		Motion.init();
		window.addEventListener('resize', () => 
		{
			if (window.innerWidth > 768) 
			{
				document.querySelector('.nav-links')?.classList.remove('open');
				document.querySelector('.mobile-menu-btn')?.classList.remove('active');
			}
		});
	}

	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
	else init();
})(window);
