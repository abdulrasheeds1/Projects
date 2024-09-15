const apiKey="ac8e4ba56e574ae9926b8b23dcff8083";

const blogContainer=document.getElementById("blog-container");

const searchInput=document.getElementById("search-input");

const searchButton=document.getElementById("search-button");

const categorySelect =document.getElementById("category");

console.log(categorySelect)

async function fetchNews(){

    try{
        const apiUrl=`https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apiKey}`

       const response = await fetch (apiUrl)

       const data = await response.json()

       return data.articles
       
    }

    catch(error){
        console.log("Error fetching news : ",error)
        return []
    }
}

searchButton.addEventListener("click", async ()=>{

    const searchQuery=searchInput.value.trim();
    
    if(searchQuery !==""){
        try{
            const articles = await fetchNewsQuery(searchQuery);
            displayBlogs(articles);
        }
        catch(error){
            console.log("Error fetching news : ",error);
        }
    }
})



async function fetchNewsQuery(query){

    try{
        const apiUrl=`https://newsapi.org/v2/everything?q=${query}&pageSize=20&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        return data.articles;
    } 

    catch(error){
        console.log("Error fetching news : ",error);
    }
}


categorySelect.addEventListener("change",async()=>{
    
   const category= categorySelect.value.trim();
   try{
    const articles = await fetchCategoryNews(category);
    displayBlogs(articles);
    }
    catch(error){
        console.log("Error fetching news : ",error);
    }
})

async function fetchCategoryNews(category){
    try{
        let apiUrl;
        if (category ==="default" ){
            apiUrl=`https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apiKey}`
        }
        else{
             apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        }
    const response = await fetch(apiUrl)
    const data = await response.json()

    return data.articles
    }
    catch(error){
        console.log("Error fetching news : ",error)
    }
}


function displayBlogs(articles){
    
    blogContainer.innerHTML="";
    
     articles.map((article) => {

        const blogCard=document.createElement("div");
        blogCard.classList.add("blog-card")    

        const img=document.createElement("img");

        img.src=article.urlToImage;
        img.alt=article.title;

        const title = document.createElement("h2");

        const titleText=article.title.length > 30 ? article.title.slice(0,31) + '....':article.title

        title.textContent=titleText;

        const description = document.createElement("p")

        const descriptionText=article.description.length > 100 ? article.description.slice(0,100) + "....":article.description

        description.textContent = descriptionText;

        blogCard.appendChild(img);

        blogCard.appendChild(title);

        blogCard.appendChild(description);


        blogCard.addEventListener("click",()=>{
            window.open(article.url,"_blank")
        })

        blogContainer.appendChild(blogCard);
    });
}



(async () =>{
    try{
        const articles = await fetchNews();
        displayBlogs(articles) 
        
    }
    catch(error){
        console.log("Error fetching news : ",error);
    }
})();
