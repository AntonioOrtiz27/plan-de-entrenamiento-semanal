/**
 * render.js — Construye las tarjetas del plan a partir de ROUTINE (data.js).
 * No hace falta editarlo para cambiar ejercicios: eso se hace en data.js.
 */

function renderRoutine() {
  const container = document.getElementById('week-plan');
  container.innerHTML = '';
  const todayIdx = (new Date().getDay() + 6) % 7; // 0 = lunes

  ROUTINE.forEach((day, i) => {
    const card = document.createElement('div');
    card.className = 'day-card' + (day.categoria === 'rest' ? ' rest' : '') + (i === todayIdx ? ' is-today' : '');
    card.dataset.cat = day.categoria;

    let html = `<p class="day-name">${day.nombre}${i === todayIdx ? ' · HOY' : ''}</p><p class="day-title">${day.titulo}</p>`;

    if (day.partido) {
      html += `<p class="match-copy">${day.partido}</p>`;
    }
    if (day.descanso) {
      html += `<p class="rest-copy">${day.descanso}</p>`;
    }
    if (day.ejercicios) {
      html += '<ul>';
      day.ejercicios.forEach(ex => {
        html += `<li><span class="chip">${ex.chip}</span><span>${ex.texto}</span></li>`;
      });
      html += '</ul>';
    }
    if (day.nota) {
      html += `<p class="note">${day.nota}</p>`;
    }

    card.innerHTML = html;
    container.appendChild(card);
  });
}

renderRoutine();
