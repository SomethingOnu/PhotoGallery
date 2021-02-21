const gallery = document.getElementById('gallery');

for (let i = 1; i <= 545; i++) {
    const number = i.toString().padStart(4, '0');

    const photo = document.createElement('a');
    photo.className        = 'photo';
    photo.href             = `photo/${number}.jpg`;
    photo.dataset.lightbox = "photo";

    const img = document.createElement('img');
    img.className   = 'lazyload';
    img.dataset.src = `photo/${number}.jpg`;
    img.src         = `photo-S/${number}.jpg`;
    img.title       = '写真';
    img.alt         = 'Photo by Something Onu';

    photo.appendChild(img);
    gallery.appendChild(photo);
};

window.onload = () => lazyload();
