export default {
    created() {
      document.documentElement.style.overflow = "hidden";
    },

    destroyed() {
      document.documentElement.style.overflow = "auto";
    }
  };