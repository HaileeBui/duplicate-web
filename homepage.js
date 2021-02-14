
'use strict';

const url = "https://www.lianatech.com/resources/blog.rss"

fetch(url)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    let html = ``;
    
    items.forEach(el => {
      html += `
        <div class="card" style="width:18rem;">
          <div class="card-body">
            <h5 class="card-title">${el.querySelector("title").innerHTML}</h5>
            <p class="card-text">${el.querySelector("description").innerHTML}</p>
            <a href="${el.querySelector("link").innerHTML}" class="btn btn-success">Go to article</a>
          </div>
        </div>
      `;
    });
    
    
    document.getElementById('extra').innerHTML = html;
  })


/*$.ajax(url, {
  accepts: {
    xml: "application/rss+xml"
  },
  type: "GET",
  dataType: "xml",

  success: (data) => {
    $(data)
      .find("item")
      .each(() => {
        const el = $(this);
        console.log(el)
        const html = `
          <div class="card" style="width:18rem;">
            <div class="card-body">
              <img src="${el.find('media\\:content, content').attr('url')} alt="">

              <h5 class="card-title">${el.find("title").text()}</h5>
              <p class="card-text">${el.find("description").text()}</p>
              <a href="${el.find("link").text()}" class="btn btn-success">Go to article</a>
            </div>
          </div>
          `;

        document.getElementById('extra').innerHTML = html;
      });
  }
});*/

