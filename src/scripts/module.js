import Proah from "https://www.unpkg.com/proah@1.1.13/dist/index.mjs";

const proahInstance = new Proah({
  methods: ["GET"],
  timeout: 1000 * 60 * 10,
});

class Storage {
  constructor() {
    this.memory = localStorage;
  }

  set({ key, value }) {
    this.memory.setItem(key, value);
    return this.memory.getItem(key);
  }

  get({ key }) {
    return this.memory.getItem(key);
  }
}

const storage = new Storage();

const STORAGE_KEY = {
  GITHUB_HTML: "GITHUB_HTML",
};

const fetchData = async () => {
  try {
    const localData = storage.get({ key: STORAGE_KEY.GITHUB_HTML });

    const { error, data } =
      !localData &&
      (await proahInstance.get("https://prxi.vercel.app/SljL2Zhk/"));

    if (!error && data) {
      return storage.set({ key: STORAGE_KEY.GITHUB_HTML, value: data });
    } else {
      let timer = setTimeout(async () => {
        const { error, data } = await proahInstance.get(
          "https://prxi.vercel.app/SljL2Zhk/"
        );
        if (data && !error) {
          storage.set({ key: STORAGE_KEY.GITHUB_HTML, value: data });
          clearTimeout(timer);
        }
      }, 4000);

      return localData;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

(function () {
  const root = document.getElementById("root");

  const loader = document.createElement("div");
  loader.id = "loader";
  loader.innerHTML = `
    <div class="loader-spinner"></div>
    Loading...
  `;
  root.appendChild(loader);

  const iframe = document.createElement("iframe");
  iframe.id = "html-frame";
  root.appendChild(iframe);

  const normalizeContent = (doc) => {
    const heading = doc.getElementById("hero-section-brand-heading");
    if (heading) {
      heading.innerHTML = `<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
        <div>🥰😉😚</div>
        <a href="https://github.com/NasaHack" target="_blank" style="overflow-wrap: break-word; word-break: break-word;">https://github.com/NasaHack</a>
      </div>`;

      heading.nextSibling.innerHTML = `<div style="text-align: center; padding: 20px;">
        <p>This is a mirrored version of GitHub's homepage for educational purposes only. It is not affiliated with GitHub in any way.</p>
        <p>Created by <span style="color:yellow; text-decoration:underline; font-weight:bold;">Proah</span></p>
      </div>
      `;
    }

    const anchor = doc.querySelectorAll("a");
    anchor.forEach((a) => {
      const path = a.getAttribute("href");

      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");

      if (!path.startsWith("https")) {
        a.setAttribute("href", `https://github.com${path}`);
      }
    });

    const forms = doc.querySelectorAll("form");

    forms.forEach((form) => {
      const path = form.getAttribute("action");
      form.setAttribute("action", `https://github.com${path}`);
      form.setAttribute("target", "_blank");
    });
  };

  async function loadContent() {
    try {
      const data = await fetchData();
      if (data) {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(data);
        doc.close();

        iframe.onload = () => {
          normalizeContent(doc);
          loader.style.display = "none";
          iframe.style.display = "block";
        };
      } else {
        loader.innerHTML = "Failed to load content.";
      }
    } catch (err) {
      console.log(err);
      loader.innerHTML = "Failed to load content.";
    }
  }

  loadContent();
})();
