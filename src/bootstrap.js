//loader.js
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
  require("jquery-scrollify");
}
