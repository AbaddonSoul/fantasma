module.exports = (req, res) => {
  // Función para limpiar y formatear cada mención desde StreamElements
  const formatearUsuario = (valor, porDefecto) => {
    if (!valor || valor.includes('random.chatter') || valor.includes('${')) {
      return `@${porDefecto}`;
    }
    const limpio = valor.replace(/^@/, '').trim();
    return `@${limpio}`;
  };

  const u = formatearUsuario(req.query.usuario, 'Alguien');
  const o1 = formatearUsuario(req.query.o1, 'Sujeto1');
  const o2 = formatearUsuario(req.query.o2, 'Sujeto2');

  const historias = [
    `👻 ${u} y ${o1} jugaron a la Ouija a las 3:00 AM y dijeron: "El primero en ser poseído es gay". El fantasma los miró, dijo "a este le veo cara de cabro" y poseyó de una a ${o2}.`,
    `🔮 ${u} y ${o1} hicieron un ritual para invocar a un demonio, pero el espíritu apareció, se asustó con la cara de ${o2} y pidió regresarse al infierno inmediatamente.`,
    `🔪 Jason acorraló a ${u} y a ${o1} en un callejón oscuro. ${u} gritó "¡Llévate al más feo!", empujó a ${o2} hacia el asesino y salieron corriendo.`,
    `🏚️ ${u}, ${o1} y ${o2} entraron a una casa embrujada. El espectro dijo: "Solo me llevaré a la persona más rara del chat" y agarró a ${o2} sin dudarlo ni un segundo.`,
    `✝️ ${u} intentó hacerle un exorcismo a ${o1}, pero el demonio se aburrió del show, se le metió a ${o2} y gritó: "¡Este cuerpo si aguantó la posesión!".`,
    `🧟 ${u} intentó sacrificarse para salvar a ${o1} de una horda de zombis, pero los zombis ignoraron a ambos y prefirieron llevarse a ${o2} para meterlo en un caldero.`,
    `📺 En medio de una investigación paranormal, ${u} y ${o1} escucharon ruidos extraños, abrieron el armario con miedo y encontraron a ${o2} comiéndose el pan del altar de muertos a escondidas.`,
    `🎃 ${u} encendió una vela negra maldita para asustar a ${o1}, pero la maldición rebotó en la habitación y le dejó las cejas quemadas a ${o2}.`
  ];

  const respuesta = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(respuesta);
};
