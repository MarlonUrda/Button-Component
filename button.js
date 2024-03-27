export class DisengagedButton extends HTMLElement {
  static get observedAttributes() {
    return ["text"];
  }

  constructor() {
    super();
    this.text = this.getAttribute("text");
    this.deco = this.getAttribute("deco");
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const btn = document.createElement("button");
    btn.textContent = this.text;

    const style = document.createElement("style");
    style.textContent = `button{${this.deco}}`;

    shadow.appendChild(style);
    shadow.appendChild(btn);

    this.innerHTML = this.text;

    this.buttonPosition = { top: 15, left: 15 };
    this.buttonColor;

    this.updateButtonStyles(btn);

    const handleClick = () => {
      this.buttonPosition = { top: 100, left: 100 };
      this.buttonColor = "green";
      btn.style.color = "black";
      this.updateButtonStyles(btn);
      btn.removeEventListener("mouseover", handleRandomization);
      alert("Madafaka");
    };

    btn.addEventListener("click", handleClick);

    let count = 0;
    const handleRandomization = () => {
      this.buttonPosition = this.getRandomPosition();
      this.buttonColor = this.getRandomColor();
      this.updateButtonStyles(btn);
      count++;
      if (count === 5) {
        alert("Too slow buddy");
      }
      if (count === 15) {
        btn.style.width = "100px";
        btn.style.height = "80px";
        btn.style.transitionDuration = "0.05s";
      }

      // let observer = new MutationObserver((mutations) => {
      //   mutations.forEach((mutation) => {
      //     if (mutation.type == "attributes") {
      //       console.log("Atributo modificado: ", mutation.attributeName);
      //     }
      //   });
      // });

      // let config = { attributes: true };

      // observer.observe(btn, config);
    };

    btn.addEventListener("mouseover", handleRandomization);
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  getRandomPosition() {
    return {
      top: Math.floor(Math.random() * window.innerHeight - 10),
      left: Math.floor(Math.random() * window.innerHeight - 10),
    };
  }

  updateButtonStyles(btn) {
    btn.style.top = `${this.buttonPosition.top}px`;
    btn.style.left = `${this.buttonPosition.left}px`;
    btn.style.backgroundColor = this.buttonColor;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "text") {
      console.log(`El atributo a cambiado de: ${oldValue} a ${newValue}`);

      let button = this.shadowRoot.querySelector("button");
      if (button) {
        button.textContent = newValue;
      }
    }
  }
}

window.customElements.define("my-button", DisengagedButton);
