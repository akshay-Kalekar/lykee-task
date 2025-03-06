export default async function handler(req, res) {
    const response = await fetch("https://json-data-1wm2.onrender.com/banners");
    const data = await response.json();
    res.status(200).json(data);
}
