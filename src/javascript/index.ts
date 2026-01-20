const animeEl = document.querySelector('#anime_list');


const API_BASE = 'https://api.jikan.moe/v4/';

type AnimeTypeList ={
    title: string,
    mal_id:number,
    images:{
        jpg:{
            image_url:string,
            small_image_url:string,
            large_image_url:string
        }
    },

    yearn: number,
    synopsis: string
}


type AnimeType ={
    title:string,
   

}




export const animesArr:AnimeType[] = [
    {
        title: 'Top mais assitidos',
    },
    {
        title: 'Top mais favoritos',
    },

    {
        title: 'Melhores da semana'
    }
]





function constructorElement(arr: AnimeTypeList[] ){
    animesArr.forEach(item=>{
        if(animeEl){
            animeEl.innerHTML +=`
            <h1 class="text-center text-3xl font-[Orbitron] text-zinc-100">${item.title}</h1>
            <div class="max-w-7xl m-auto py-4 ">
                <div class="rounded-3xl border-3 relative overflow-hidden border-zinc-100 p-4 " >
                      <div class="absolute bottom-50">
                        <i class="fa-solid fa-arrow-left text-4xl"></i>
                    </div>

                    <div class="absolute bottom-50 right-0">
                        <i class="fa-solid fa-arrow-right text-4xl"></i>
                    </div>
                    <ul class="w-[9999px] gap-x-4 flex  ">
                  
                    </ul>
                </div>
            </div>
            
            `;
        }
    })


    const liElement = animeEl?.querySelectorAll('ul')

    arr.forEach(anime=>{
        if(liElement){
            liElement.forEach(el=>{
                el.innerHTML +=`
            <li class="cursor-pointer" >
                <img src=${anime.images.jpg.image_url} alt=${anime.title}>
                <span>${anime.title}</span>
            </li >
            `
            })
        }
    });
}

async function dataFetch() {
    const response = await fetch(`${API_BASE}anime`);
    const data = await response.json();
    // console.log(data.data);

    constructorElement(data.data)

    
}





dataFetch()