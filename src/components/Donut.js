import { Doughnut, mixins } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["data", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
      borderWidth: "1000px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "2px",
      cutoutPercentage:100,
    });
  },

watch: {
  'data' (to, from) {
    this.renderChart(this.data, this.options)
  }
}
};