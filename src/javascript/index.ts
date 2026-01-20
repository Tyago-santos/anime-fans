import { Slider } from "./slider";

class AnimeSlider {
  private container: HTMLElement;


  constructor(containerId: string, title: string, animes: any[]) {
    // Criamos o elemento da seção
    this.container = document.createElement('section');
    this.container.className = "mb-12 px-10 relative group/slider";
    
    this.render(title, animes);
    document.querySelector(containerId)?.appendChild(this.container);
    this.initEvents();
  }

  private render(title: string, animes: any[]) {
    this.container.innerHTML = `
      <h2 class="font-['Orbitron'] text-xl text-white mb-6 border-l-4 border-[#ff4d9d] pl-4 uppercase tracking-tighter">
        ${title}
      </h2>

      <div class="relative flex items-center">
        <button class="btn-left absolute left-[-30px] z-30 bg-black/90 p-4 rounded-full text-[#37bcf1] opacity-0 group-hover/slider:opacity-100 transition-all border border-[#37bcf1]/30 hover:shadow-[0_0_15px_#37bcf1]">
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <div class="slider-track transition-margin duration-500 flex gap-4 overflow-x-hidden scroll-smooth pb-4">
          ${animes.map(anime => this.cardTemplate(anime)).join('')}
        </div>

        <button class="btn-right absolute right-[-30px] z-30 bg-black/90 p-4 rounded-full text-[#ff4d9d] opacity-0 group-hover/slider:opacity-100 transition-all border border-[#ff4d9d]/30 hover:shadow-[0_0_15px_#ff4d9d]">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    `;
  }

  private cardTemplate(anime: any) {
    return `
      <div class="min-w-[200px] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group transition-all hover:border-[#ff4d9d]">
        <img src="${anime.images.jpg.large_image_url}" class="w-full h-[280px] object-cover group-hover:scale-105 transition-transform">
        <div class="p-3 text-sm font-bold truncate text-zinc-200">${anime.title}</div>
      </div>
    `;
  }

  private initEvents() {
    const track = this.container.querySelector('.slider-track') as HTMLElement;
    const btnLeft = this.container.querySelector('.btn-left') as HTMLButtonElement;
    const btnRight = this.container.querySelector('.btn-right') as HTMLButtonElement;

    if (track && btnLeft && btnRight) {
      new Slider(track, btnRight, btnLeft);
    }
  }
}

// --- COMO USAR ---
async function startApp() {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    const { data } = await response.json();

    // Criamos instâncias independentes
    new AnimeSlider('#anime_list', 'Top Hits', data);
    new AnimeSlider('#anime_list', 'Mais Populares', data.reverse());
}

startApp();