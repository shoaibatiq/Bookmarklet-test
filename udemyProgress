function convertDuration(duration) {
  hr = duration.match(/\b(\d+\.?\d*)\s*(hr?)/);
  min = duration.match(/\b(\d+\.?\d*)\s*(min?)/);
  hr = hr ? parseInt(hr[1]) * 60 : 0;
  min = min ? parseInt(min[1]) : 0;
  total = min + hr;
  return total;
}

function convertToHours(duration) {
  hr = Math.floor(duration / 60);
  min = duration % 60;
  str = hr == 0 ? `${min}min` : `${hr}hr ${min}min`;
  return str;
}

function getStats() {
  Span = document.createElement("span");
  Span.innerHTML = "Remaining: 00 00 | Done: 00 00";
  document.querySelector('div[class*="lead--lead"]').appendChild(Span);
  toClick = document.querySelector('button[class*="curriculum--show-more"]')
  toClick ? toClick.click() : {} ;
  sections = document.querySelectorAll('button[class*="js-panel-toggler"]');
  durations = [];
  for (let el of sections) {
    el = el.innerText.split("• ");
    el = el[el.length - 1];
    durations.push(convertDuration(el));
  }
  remaining = durations.reduce((a, b) => a + b);
  done = 0;

  stats = {};
  orignal = {};
  for (i = 0; i < sections.length; i++) {
    hoverStr = `Remaining: ${convertToHours(
      remaining
    )} | Done: ${convertToHours(done)}`;
    stats[sections[i].innerText] = hoverStr;
    orignal[hoverStr] = sections[i].innerText;
    done += durations[i];
    remaining -= durations[i];
  }
  for (i of sections) {
    i.addEventListener("mouseover", (event) => {
      if (stats[event.relatedTarget.innerText]) {
        Span.innerHTML = stats[event.relatedTarget.innerText];
      }
    });
  }
}
getStats();
