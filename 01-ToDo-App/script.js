function init() {
  toggleTheme();
}

function toggleTheme() {
  const toggleButton = document.getElementById("toggleButton");
  const savedColorScheme = localStorage.getItem("colorScheme");
  const colorScheme = savedColorScheme || "light";
  document.documentElement.style.colorScheme = colorScheme;
  updateToggleButton();
  toggleButton.addEventListener("click", function () {
    if (document.documentElement.style.colorScheme === "dark") {
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("colorScheme", "light");
    } else {
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("colorScheme", "dark");
    }
    updateToggleButton();
  });
}

function updateToggleButton() {
  const toggleButton = document.getElementById("toggleButton");
  const icon = toggleButton.querySelector("svg");
  const text = toggleButton.querySelector("span");
  const isDark = document.documentElement.style.colorScheme === "dark";

  icon.innerHTML = isDark ? getMoonIcon() : getSunIcon();
  text.textContent = isDark ? "Dark" : "Light";
}

function getSunIcon() {
  return `
    <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M12 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 20V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M4 12L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M22 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    `;
}

function getMoonIcon() {
  return `
    <path opacity="0.1" d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z" 
    fill="#323232"/>
    <path d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"/>
    `;
}
