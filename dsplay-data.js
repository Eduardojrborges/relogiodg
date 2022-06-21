// fontSize hack to test outside DSPLAY

var template = {
  background: "tudo.jpg",
  barColor: '#FFF',
  barOpacity: .2,
  dateColor: '#999',
  timeColor: '#666'
};

var config = {
  loscale: 'en_US'
};

function init() {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.body.style.fontSize = (h / 360) + 'em';
}



//init();
