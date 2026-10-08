module.exports = (req, res) => {
  // Función para limpiar usuarios
  const formatearUsuario = (valor, porDefecto) => {
    if (!valor || valor.includes('random.chatter') || valor.includes('${')) {
      return `@${porDefecto}`;
    }
    const limpio = valor.replace(/^@/, '').trim();
    return `@${limpio}`;
  };

  let u1 = formatearUsuario(req.query.u1, 'Usuario1');
  let u2 = formatearUsuario(req.query.u2, 'Usuario2');
  let u3 = formatearUsuario(req.query.u3, 'Usuario3');

  // Si u2 o u3 son idénticos a u1, les agregamos variaciones para que la historia tenga más sentido
  const lista = [u1, u2, u3];

  const historias = [
    `👻 ${lista[0]} y ${lista[1]} jugaron a la Ouija a las 3:00 AM y dijeron: "El primero en ser poseído es gay". El fantasma los miró, dijo "a este le veo cara de cabro" y poseyó de una a ${lista[2]}.`,
    `🔮 ${lista[0]} y ${lista[1]} hicieron un ritual para invocar a un demonio, pero el espíritu apareció, se asustó con la cara de ${lista[2]} y pidió regresarse al infierno inmediatamente.`,
    `🔪 Jason acorraló a ${lista[0]} y a ${lista[1]} en un callejón oscuro. ${lista[0]} gritó "¡Llévate al más feo!", empujó a ${lista[2]} hacia el asesino y salieron corriendo.`,
    `🏚️ ${lista[0]}, ${lista[1]} y ${lista[2]} entraron a una casa embrujada. El espectro dijo: "Solo me llevaré a la persona más rara del chat" y agarró a ${lista[2]} sin dudarlo ni un segundo.`,
    `✝️ ${lista[0]} intentó hacerle un exorcismo a ${lista[1]}, pero el demonio se aburrió del show, se le metió a ${lista[2]} y gritó: "¡Este cuerpo si aguantó la posesión!".`,
    `🧟 ${lista[0]} intentó sacrificarse para salvar a ${lista[1]} de una horda de zombis, pero los zombis ignoraron a ambos y prefirieron llevarse a ${lista[2]} para meterlo en un caldero.`,
    `📺 En medio de una investigación paranormal, ${lista[0]} y ${lista[1]} escucharon ruidos extraños, abrieron el armario con miedo y encontraron a ${lista[2]} comiéndose el pan del altar de muertos a escondidas.`,
    `🎃 ${lista[0]} encendió una vela negra maldita para asustar a ${lista[1]}, pero la maldición rebotó en la habitación y le dejó las cejas quemadas a ${lista[2]}.`
  ];

  const respuesta = historias[Math.floor(Math.random() * historias.length)];

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(respuesta);
};
