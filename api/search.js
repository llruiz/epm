export default async function handler(req, res) {
  const { url } = req.query; // Pega o link que você quer pesquisar
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.status(200).send(data); // Devolve o conteúdo do site sem erro de CORS
  } catch (error) {
    res.status(500).json({ error: 'Erro ao acessar o site' });
  }
}
