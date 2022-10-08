let screenHeight = $(window).height();
let currentMenuHeight = $(".nav-active").offset().top;

if (currentMenuHeight > screenHeight * 0.8) {
  $(".sidebar").animate(
    {
      scrollTop: currentMenuHeight - 100,
    },
    1100
  );
}

let popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

$(".counter-up").counterUp({
  delay: 10,
  time: 1000,
});

window.onresize = function () {
  const width = window.innerWidth;
  if (width > 991) {
    $(".sidebar").css("marginLeft", "0");
  } else if (width) {
    $(".sidebar").css("marginLeft", "-100%");
  }
};

$(".show-sidebar-btn").click(function () {
  $(".sidebar").animate({ marginLeft: "0" });
});

$(".hide-sidebar-btn").click(function () {
  $(".sidebar").animate({ marginLeft: "-100%" });
});

function go(url) {
  setTimeout(function () {
    location.href = url;
  }, 550);
}

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let date = new Date().getMonth();
date = month[date];
let dateArr = [];
for (let i = 11; i <= 21; i++) dateArr.push(`${date} ${i}`);
let orderCountArr = [7, 5, 6, 4, 6, 4, 8, 6, 8, 9, 6];
let viewerCountArr = [13, 12, 15, 14, 20, 17, 19, 16, 23, 33, 16];

const ctx = document.getElementById("ov").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: dateArr,
    datasets: [
      {
        label: "Order Count",
        data: orderCountArr,
        backgroundColor: "rgba(0,123,255,0.3)",
        borderColor: "rgb(0,123,255)",
        borderWidth: 1,
        tension: 0.2,
      },
      {
        label: "View Count",
        data: viewerCountArr,
        backgroundColor: "#28a74530",
        borderColor: "#28a745",
        borderWidth: 1,
        tension: 0.2,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          // ticks: {
          //     display: false
          // },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          beginAtZero: true,
          gridLines: {
            display: false,
          },
          // ticks: {
          //     display: false
          // }
        },
      ],
    },
    legend: {
      display: true,
      position: "top",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
      },
    },
  },
});

let orderFromPlace = [5, 15, 4, 9, 7];
let places = ["YGN", "MDY", "NPY", "SHAN", "MGW"];
let ctx2 = document.getElementById("op").getContext("2d");
let op = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: places,
    datasets: [
      {
        data: orderFromPlace,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
      },
    },
  },
});
