const data=window.RAMBO_DEMO_DATA,$=id=>document.getElementById(id),fmt=(value,digits=1)=>Number(value).toLocaleString(undefined,{maximumFractionDigits:digits});

function chart(id,values,tone="green"){
  const svg=$(id),width=600,top=18,bottom=165;
  const min=Math.min(...values),max=Math.max(...values),padding=(max-min||1)*.12,low=min-padding,high=max+padding;
  const points=values.map((value,index)=>`${index/(values.length-1)*width},${bottom-(value-low)/(high-low)*(bottom-top)}`).join(" ");
  svg.innerHTML=`<line x1="0" y1="${top}" x2="${width}" y2="${top}"/><line x1="0" y1="${bottom}" x2="${width}" y2="${bottom}"/><polyline class="${tone}" points="${points}"/><text x="6" y="14">${fmt(max,2)}</text><text x="6" y="186">${fmt(min,2)}</text>`;
}

function render(){
  $("overall").textContent=data.overall;$("summary").textContent=data.summary;$("odometer").textContent=`${fmt(data.odometerMiles)} mi`;$("freshness").textContent=`${data.freshnessMinutes}m`;$("sampleCount").textContent=fmt(data.samples,0);$("alertCount").textContent=data.alerts.length;$("alerts").innerHTML=data.alerts.length?data.alerts.map(item=>`<div class="alert">${item}</div>`).join(""):"No active synthetic alerts.";$("hybrid").textContent=data.hybrid;$("battery12").textContent=`${data.primaryBattery.soc}% · ${data.primaryBattery.voltage.toFixed(2)} V`;$("oil").textContent=`${data.maintenance.oilLife}%`;$("maintenance").textContent=`Coolant ${data.maintenance.coolantC}°C · outside ${data.maintenance.outsideC}°C`;$("engineState").textContent=data.engine.state;$("engineDetail").textContent=`${fmt(data.engine.rpm,0)} rpm`;$("coolant").textContent=`${data.maintenance.coolantC}°C`;$("outside").textContent=`Outside ${data.maintenance.outsideC}°C`;$("gear").textContent=data.transmission.gear;$("torque").textContent=`${data.transmission.torqueNm} Nm reported torque`;
  $("eventCount").textContent=`${data.events.length} latest events`;$("events").innerHTML=data.events.map(event=>`<div class="terminal-row"><time class="terminal-time">${event.time}</time><span class="terminal-kind ${event.tone}">${event.kind}</span><span class="terminal-message">${event.message}</span></div>`).join("");
  $("diagnosticRows").innerHTML=data.diagnostics.map(event=>`<tr><td>${event.observed}</td><td class="severity">${event.severity}</td><td><strong>${event.system}</strong><br><code>${event.code}</code></td><td>${event.message}</td><td>${fmt(event.mileage)} mi</td></tr>`).join("");
  chart("socChart",data.trends.batterySoc);chart("voltageChart",data.trends.batteryVoltage,"blue");chart("coolantChart",data.trends.coolantC);chart("torqueChart",data.trends.transmissionTorqueNm,"blue");
}

document.querySelector("nav").addEventListener("click",event=>{const button=event.target.closest("button[data-view]");if(!button)return;document.querySelectorAll("nav button").forEach(item=>item.classList.toggle("active",item===button));document.querySelectorAll(".view").forEach(view=>view.classList.toggle("active",view.id===button.dataset.view));});
render();
