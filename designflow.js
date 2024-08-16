document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[class]").forEach((e) => {
    const l = Array.from(e.classList);

    const t = (r, p) => {
      const v = parseInt(p);
      return v / r + "rem";
    };

    l.forEach((c) => {
      if (c.startsWith("gap-")) {
        const g = c.split("-")[1];
        e.style.setProperty("--gap-size", t(16, g));
        e.classList.add("gap");
      } else if (c.startsWith("m-")) {
        const g = c.split("-")[1];
        e.style.setProperty("--margin-size", t(16, g));
        e.classList.add("m");
      } else if (c.startsWith("ml-")) {
        e.style.setProperty("--margin-left-size", c.split("-")[1]);
        e.classList.add("ml");
      } else if (c.startsWith("mr-")) {
        e.style.setProperty("--margin-right-size", c.split("-")[1]);
        e.classList.add("mr");
      } else if (c.startsWith("mt-")) {
        e.style.setProperty("--margin-top-size", c.split("-")[1]);
        e.classList.add("mt");
      } else if (c.startsWith("mb-")) {
        e.style.setProperty("--margin-bottom-size", c.split("-")[1]);
        e.classList.add("mb");
      } else if (c.startsWith("mx-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--margin-left-size", v);
        e.style.setProperty("--margin-right-size", v);
        e.classList.add("mx");
      } else if (c.startsWith("my-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--margin-top-size", v);
        e.style.setProperty("--margin-bottom-size", v);
        e.classList.add("my");
      } else if (c.startsWith("p-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--padding-size", t(16, v));
        e.classList.add("p");
      } else if (c.startsWith("pl-")) {
        e.style.setProperty("--padding-left-size", c.split("-")[1]);
        e.classList.add("pl");
      } else if (c.startsWith("pr-")) {
        e.style.setProperty("--padding-right-size", c.split("-")[1]);
        e.classList.add("pr");
      } else if (c.startsWith("pt-")) {
        e.style.setProperty("--padding-top-size", c.split("-")[1]);
        e.classList.add("pt");
      } else if (c.startsWith("pb-")) {
        e.style.setProperty("--padding-bottom-size", t(16, c.split("-")[1]));
        e.classList.add("pb");
      } else if (c.startsWith("px-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--padding-left-size", t(16, v));
        e.style.setProperty("--padding-right-size", t(16, v));
        e.classList.add("px");
      } else if (c.startsWith("py-")) {
        const v = c.split("-")[1];
        e.style.setProperty(
          "--padding-top-size",
          v.includes("%") || v.includes("vh") ? v : t(16, v)
        );
        e.style.setProperty("--padding-bottom-size", t(16, v));
        e.classList.add("py");
      } else if (c.startsWith("w-")) {
        const v = c.split("-")[1];
        e.style.setProperty(
          "--width-size",
          v.includes("%") || v.includes("vh") ? v : t(16, v)
        );
        e.classList.add("w");
      } else if (c.startsWith("h-")) {
        const v = c.split("-")[1];
        e.style.setProperty(
          "--height-size",
          v.includes("%") || v.includes("vh") ? v : t(16, v)
        );
        e.classList.add("h");
      } else if (c.startsWith("bgc-")) {
        e.style.setProperty("--background-color", c.split("-")[1]);
        e.classList.add("bgc");
      } else if (c.startsWith("radius-")) {
        e.style.setProperty("--radius-size", t(16, c.split("-")[1]));
        e.classList.add("radius");
      } else if (c.startsWith("bgsz-")) {
        e.style.setProperty("--background-size", c.split("-")[1]);
        e.classList.add("bgsz");
      } else if (c.startsWith("shadowC-")) {
        e.style.setProperty("--shadow-color", c.split("-")[1]);
        e.classList.add("shadowC");
      } else if (c.startsWith("grad-bg")) {
        const a = c.split(":")[1].split(",");
        e.style.setProperty("--grad-degrees", a[0]);
        e.style.setProperty("--grad-color1", a[1]);
        e.style.setProperty("--grad-color2", a[2]);
        e.classList.add("grad-bg");
      } else if (c.startsWith("self-")) {
        e.style.setProperty("--self-align", c.split("-")[1]);
        e.classList.add("self");
      } else if (c.startsWith("textc-")) {
        e.style.setProperty("--text-color", c.split("-")[1]);
        e.classList.add("textc");
      } else if (c.startsWith("textsz-")) {
        e.style.setProperty("--text-size", t(16, c.split("-")[1]));
        e.classList.add("textsz");
      } else if (c.startsWith("md:gap-")) {
        e.style.setProperty("--md-gap-size", t(16, c.split("-")[1]));
        e.classList.add("md:gap");
      } else if (c.startsWith("md:m-")) {
        e.style.setProperty("--md-margin-size", t(16, c.split("-")[1]));
        e.classList.add("md:m");
      } else if (c.startsWith("md:bgc-")) {
        e.style.setProperty("--md-bg-color", c.split("-")[1]);
        e.classList.add("md:bgc");
      } else if (c.startsWith("md:textsz-")) {
        e.style.setProperty("--md-text-size", t(16, c.split("-")[1]));
        e.classList.add("md:textsz");
      } else if (c.startsWith("md:textc-")) {
        e.style.setProperty("--md-text-color", c.split("-")[1]);
        e.classList.add("md:textc");
      } else if (c.startsWith("hover:bgc-")) {
        const v = c.split("-")[1];
        e.addEventListener("mouseover", () => {
          e.style.setProperty("--background-hov", v);
          e.classList.add("hover:bgc");
        });
      } else if (c.startsWith("hover:text-")) {
        const v = c.split("-")[1];
        e.addEventListener("mouseover", () => {
          e.style.setProperty("--text-color-hov", v);
          e.classList.add("hover:text");
        });
      } else if (c.startsWith("fsz-")) {
        e.style.setProperty("--font-size", c.split("-")[1]);
        e.classList.add("fsz");
      } else if (c.startsWith("ff-")) {
        e.style.setProperty("--font-family", c.split("-")[1]);
        e.classList.add("ff");
      } else if (c.startsWith("fw-")) {
        e.style.setProperty("--font-weight", c.split("-")[1]);
        e.classList.add("fw");
      } else if (c.startsWith("lhsz-")) {
        e.style.setProperty("--line-height-size", c.split("-")[1]);
        e.classList.add("lhsz");
      } else if (c.startsWith("t:")) {
        e.style.setProperty("--top-value", t(16, c.split(":")[1]));
        e.classList.add("t");
      } else if (c.startsWith("b:")) {
        e.style.setProperty("--bottom-value", t(16, c.split(":")[1]));
        e.classList.add("b");
      } else if (c.startsWith("l:")) {
        e.style.setProperty("--left-value", t(16, c.split(":")[1]));
        e.classList.add("l");
      } else if (c.startsWith("r:")) {
        e.style.setProperty("--right-value", t(16, c.split(":")[1]));
        e.classList.add("r");
      } else if (c.startsWith("cspan-")) {
        e.style.setProperty("--col-span-value", c.split("-")[1]);
        e.classList.add("cspan");
      } else if (c.startsWith("rspan-")) {
        e.style.setProperty("--row-span-value", c.split("-")[1]);
        e.classList.add("rspan");
      } else if (c.startsWith("grid-cols:")) {
        e.style.setProperty("--grid-cols-value", c.split(":")[1]);
        e.classList.add("grid-cols");
      } else if (c.startsWith("grid-rows:")) {
        e.style.setProperty("--grid-rows-value", c.split(":")[1]);
        e.classList.add("grid-rows");
      } else if (c.startsWith("cl-")) {
        e.style.setProperty("--clip-path", c.split("-")[1]);
        e.classList.add("cl");
      } else if (c.startsWith("mask-")) {
        e.style.setProperty("--mask-image", c.split("-")[1]);
        e.classList.add("mask");
      } else if (c.startsWith("fnt-")) {
        e.style.setProperty("--font-style", c.split("-")[1]);
        e.classList.add("fnt");
      } else if (c.startsWith("op-")) {
        e.style.setProperty("--opacity", c.split("-")[1]);
        e.classList.add("op");
      } else if (c.startsWith("text-shadow-")) {
        e.style.setProperty("--text-shadow", c.split("-")[1]);
        e.classList.add("text-shadow");
      } else if (c.startsWith("trans-")) {
        e.style.setProperty("--transform", c.split("-")[1]);
        e.classList.add("trans");
      } else if (c.startsWith("maxw-")) {
        e.style.setProperty("--max-width", c.split("-")[1]);
        e.classList.add("maxw");
      } else if (c.startsWith("minw-")) {
        e.style.setProperty("--min-width", c.split("-")[1]);
        e.classList.add("minw");
      } else if (c.startsWith("maxh-")) {
        e.style.setProperty("--max-height", c.split("-")[1]);
        e.classList.add("maxh");
      } else if (c.startsWith("minh-")) {
        e.style.setProperty("--min-height", c.split("-")[1]);
        e.classList.add("minh");
      } else if (c.startsWith("fixed-")) {
        e.style.setProperty("--position", "fixed");
        e.classList.add("fixed");
      } else if (c.startsWith("abs-")) {
        e.style.setProperty("--position", "absolute");
        e.classList.add("abs");
      } else if (c.startsWith("rel-")) {
        e.style.setProperty("--position", "relative");
        e.classList.add("rel");
      } else if (c.startsWith("st-")) {
        e.style.setProperty("--position", "static");
        e.classList.add("st");
      } else if (c.startsWith("float-")) {
        e.style.setProperty("--float", c.split("-")[1]);
        e.classList.add("float");
      } else if (c.startsWith("rect:")) {
        const val = c.split(":")[1];
        const vals = val.split(",");
        const proc = vals.map((v) => (v.includes("px") ? t(16, v) : v));
        e.style.setProperty("--rect-width", proc[0]);
        e.style.setProperty("--rect-height", proc[1]);
        e.style.setProperty("--background-color", proc[2]);
        e.classList.add("rect");
      } else if (c.startsWith("sq:")) {
        const val = c.split(":")[1];
        const vals = val.split(",");
        const proc = vals.map((v) => (v.includes("px") ? t(16, v) : v));
        e.style.setProperty("--sq-width", proc[0]);
        e.style.setProperty("--sq-height", proc[0]);
        if (proc.length === 2) {
          e.style.setProperty("--background-color", proc[1]);
          e.classList.add("sq");
        }
      } else if (c.startsWith("circle:")) {
        const val = c.split(":")[1];
        const vals = val.split(",");
        const proc = vals.map((v) => (v.includes("px") ? t(16, v) : v));
        e.style.setProperty("--circle-width", proc[0]);
        e.style.setProperty("--circle-width", proc[0]);
        e.style.setProperty("--background-color", proc[1]);
        e.classList.add("circle");
      } else if (c.startsWith("lineb:")) {
        const v = c.split(":")[1].split(",");
        e.style.setProperty("--line-bottom-size", v[0]);
        e.style.setProperty("--line-bottom-color", v[1]);
        e.classList.add("lineb");
      } else if (c.startsWith("linel:")) {
        const v = c.split(":")[1].split(",");
        e.style.setProperty("--line-left-size", v[0]);
        e.style.setProperty("--line-left-color", v[1]);
        e.classList.add("linel");
      } else if (c.startsWith("liner:")) {
        const v = c.split(":")[1].split(",");
        e.style.setProperty("--line-right-size", v[0]);
        e.style.setProperty("--line-right-color", v[1]);
        e.classList.add("liner");
      } else if (c.startsWith("linet:")) {
        const v = c.split(":")[1].split(",");
        e.style.setProperty("--line-top-size", v[0]);
        e.style.setProperty("--line-top-color", v[1]);
        e.classList.add("linet");
      } else if (c.startsWith("align-text:")) {
        const v = c.split(":")[1];
        e.style.setProperty("--text-align", v);
        e.classList.add("align-text");
      } else if (c.startsWith("animate-spin:")) {
        const v = c.split(":")[1];
        e.style.setProperty("--spin-animation-speed", v);
        e.classList.add("animate-spin");
      } else if (c.startsWith("border-")) {
        const v = c.split("-")[1].split(",");
        e.style.setProperty("--border-size-value", v[0]);
        e.style.setProperty("--border-color-value", v[1]);
        e.classList.add("border");
      } else if (c.startsWith("outline-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--outline-value", v);
        e.classList.add("outline");
      } else if (c.startsWith("overflow:")) {
        const v = c.split(":")[1];
        e.style.setProperty("--overflow-property", v);
        e.classList.add("overflow");
      } else if (c.startsWith("overflow-x:")) {
        const v = c.split(":")[1];
        e.style.setProperty("--overflow-x-property", v);
        e.classList.add("overflow-x");
      } else if (c.startsWith("overflow-y:")) {
        const v = c.split(":")[1];
        e.style.setProperty("--overflow-y-property", v);
        e.classList.add("overflow-y");
      } else if (c.startsWith("radiustl-")) {
        const v = c.split("-")[1];
        const r = t(16, v);
        e.style.setProperty("--radius-top-left", r);
        e.classList.add("radiustl");
      } else if (c.startsWith("radiustr-")) {
        const v = c.split("-")[1];
        const r = t(16, v);
        e.style.setProperty("--radius-top-right", r);
        e.classList.add("radiustr");
      } else if (c.startsWith("radiusbl-")) {
        const v = c.split("-")[1];
        const r = t(16, v);
        e.style.setProperty("--radius-bottom-left", r);
        e.classList.add("radiusbl");
      } else if (c.startsWith("radiusbr-")) {
        const v = c.split("-")[1];
        const r = t(16, v);
        e.style.setProperty("--radius-bottom-right", r);
        e.classList.add("radiusbr");
      } else if (c.startsWith("bgcv-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--background-cover", v);
        e.classList.add("bgcv");
      } else if (c.startsWith("bgpos-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--background-position", v);
        e.classList.add("bgpos");
      } else if (c.startsWith("bgposx-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--background-position-x", v);
        e.classList.add("bgposx");
      } else if (c.startsWith("bgposy-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--background-position-y", v);
        e.classList.add("bgposy");
      } else if (c.startsWith("decoration-")) {
        const v = c.split("-")[1];
        e.style.setProperty("--text-decoration", v);
        e.classList.add("decoration");
      } else if (c.startsWith("shadow:")) {
        const v = c.split(":")[1].split(",");
        e.style.setProperty("--shadow-position-x", v[0]);
        e.style.setProperty("--shadow-position-y", v[1]);
        e.style.setProperty("--shadow-blur", v[2]);
        e.style.setProperty("--custom-shadow-color", v[3]);
        e.classList.add("shadow");
      } else if (c.startsWith("rotate:")) {
        const v = c.split(":")[1];
        e.style.setProperty("--rotation-value", v);
        e.classList.add("rotate");
      }

      const ob = new IntersectionObserver(
        (ent) => {
          ent.forEach((e) => {
            if (e.isIntersecting) {
              if (e.target.classList.contains("fade-in-first")) {
                e.target.classList.add("visible");
              } else if (e.target.classList.contains("fade-in-second")) {
                setTimeout(() => {
                  e.target.classList.add("visible");
                }, 500);
              }
              ob.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document
        .querySelectorAll(".fade-in-first, .fade-in-second")
        .forEach((el) => {
          ob.observe(el);
        });
    });
  });
});
