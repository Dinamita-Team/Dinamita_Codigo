const allStories = [
    {
      id: 0,
      author: "JOYFLY Silla Gamer",
      imageUrl: "https://ryrinformatica.com/wp-content/uploads/2020/09/20353.jpg",
    },
  
    {
      id: 1,
      author: "Ipad Mini",
      imageUrl: "https://9to5mac.com/wp-content/uploads/sites/6/2021/08/ipad-mini-6-9to5mac-5.jpg?quality=82&strip=all&w=1024",
    },
  
    {
      id: 2,
      author: "MacBook Air 13",
      imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/220715121407-macbook-air-m2-review-1.jpg?c=original",
    },
  
    {
      id: 3,
      author: "Lapiz Optico",
      imageUrl: "https://mac-center.com/cdn/shop/products/unnamed_c7b21e6d-22dd-408b-90cc-1afd37e0a79d.jpg?v=1661537900",
    },
  
    {
      id: 4,
      author: "PC Gamer",
      imageUrl: "https://assets.jumpseller.com/store/tienda-gamer-medellin/themes/451129/options/62001519/COMBOS.png?1644144864",
    },
  
    {
      id: 5,
      author: "iPhone 14 Pro Max",
      imageUrl: "https://www.ktronix.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-194253486770-001.jpg?context=bWFzdGVyfGltYWdlc3wxNTYwNzd8aW1hZ2UvanBlZ3xhRGt4TDJobU9DOHhNell4T1RBMk1UZzRNamt4TUM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TVRrME1qVXpORGcyTnpjd1h6QXdNUzVxY0djfGVjNWU5NzI0MThjNDU4MjU4NTk3ZTkyNmRlMjViZjRiYTU1NmFiOTBhYjYxMjYzYTg5ZTc4YzI1ZDA0OTMwMjM",
    },
  
    {
      id: 6,
      author: "Minicomponente SONY",
      imageUrl: "https://www.ktronix.com/medias/4548736108127-1-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMjgwMTN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzRNaTlvTVRZdk9UYzNNelV6TlRVeU5qazBNaTVxY0djfDdmOTM5YjQ3ZjRmODE2YTcxOTllNWNlMzk3ZDI3NmZmNDY3NTUwMDM2ZDViYmY4ZWNlYjRhZGI5ZjkzN2I2ZDM",
    },
  
    {
      id: 7,
      author: "Consola XBOX Series S",
      imageUrl: "https://www.ktronix.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-889842651348-001.jpg?context=bWFzdGVyfGltYWdlc3w1NDI4OXxpbWFnZS9qcGVnfGFESmlMMmd5T0M4eE16YzBNekV6Tmpjd01qUTVOQzgzTlRCWGVEYzFNRWhmYldGemRHVnlMMmh2ZEdadmJHUmxjaTkwY21GdWMyWmxjaTlwYm1OdmJXbHVaeTlrWlhCdmMybDBMMmg1WW5KcGN5MXBiblJsY21aaFkyVnpMMGxPTDIxbFpHbGhMM0J5YjJSMVkzUXZPRGc1T0RReU5qVXhNelE0WHpBd01TNXFjR2N8MWRmMTM3NjlkZmE2ZDM3MzEwZTMxNDJhNWY4ZDc0MzRmNGFiMDQ5Y2U2YjVlMDg3MDlmZWU5ZmIzODljMGYyYg",
    },
  
    {
      id: 8,
      author: "Cámara FUJIFILM Instax Mini 12",
      imageUrl: "https://www.ktronix.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-074101208160-001.jpg?context=bWFzdGVyfGltYWdlc3wyNDIzMzB8aW1hZ2UvanBlZ3xhREU1TDJneU9TOHhNemMyTkRrek9EWTJNVGt4T0M4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TURjME1UQXhNakE0TVRZd1h6QXdNUzVxY0djfDEwMzBkNGY2YzE5Yjg3NzkzZDY3NDAwMmE0MWJjYTc5NTZlYzUzMTBmMGZhOWI5MmQwZTcyMTQ0Y2FlYzM3ZGM",
    },
  
    {
      id: 9,
      author: "Reloj ESENSES Inteligente",
      imageUrl: "https://www.ktronix.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7707278179836-001.jpg?context=bWFzdGVyfGltYWdlc3wxMzMzNDd8aW1hZ2UvanBlZ3xhREU1TDJnd09TOHhNemN5TkRVMU1qSTJOVGMxT0M4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2Tnpjd056STNPREUzT1Rnek5sOHdNREV1YW5Cbnw0ZTZlNzRlYWI0MjY4MGNiN2FjMTBiNzc0ZTBhYTM1YWVkNGNkNmU4NTVhMTdkMWM4ZDg1NTU0ZDVkNGU5MDQ4",
    },
  
    {
      id: 10,
      author: "Consola PS5 Estándar",
      imageUrl: "https://www.ktronix.com/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-711719556220-002.jpg?context=bWFzdGVyfGltYWdlc3wxMTQwMzB8aW1hZ2UvanBlZ3xhRFUzTDJneVppOHhNelV3TlRjeU9EUTNPVEkyTWk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2TnpFeE56RTVOVFUyTWpJd1h6QXdNaTVxY0djfDNmN2M4NzVhNWRiNjViMDMxM2UxNDlhNjQ4NDJmNzUzMGJjZGYxZTEyMTQ2MzEwZWRkMDMxNzIzNjA4MTBiYjE",
    },
  
    {
      id: 11,
      author: "Alexa",
      imageUrl: "https://img.asmedia.epimg.net/resizer/eItySVz8Ln0gsCCdx9rlf8a_P-s=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YTMJZBNDJNM4JA2IJ5LJ5PCDDQ.jpg",
    },
  
    {
      id: 12,
      author: "Audífonos APPLE AirPods",
      imageUrl: "https://www.ktronix.com/medias/190199098435-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NzQ3M3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobU9DOW9OVGN2T1RFeU5UUXhOalU1T1RVNE1pNXFjR2N8NzQxYmEyNTM0Yzg5NTVmMWI0MDVmZWJmOWMxYjExMmMzNDgzNTAzNTdlMjVlYmQ0YzY0ZTY2NzY5ODAyNjIyYg",
    },
  ];
  
  const stories = document.querySelector(".stories");
  const storiesFullView = document.querySelector(".stories-full-view");
  const closeBtn = document.querySelector(".close-btn");
  const storyImageFull = document.querySelector(".stories-full-view .story img");
  const storyAuthorFull = document.querySelector(
    ".stories-full-view .story .author"
  );
  const nextBtn = document.querySelector(".stories-container .next-btn");
  const previousBtn = document.querySelector(".stories-container .previous-btn");
  const storiesContent = document.querySelector(".stories-container .content");
  const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
  const previousBtnFull = document.querySelector(
    ".stories-full-view .previous-btn"
  );
  
  let currentActive = 0;
  
  const createStories = () => {
    allStories.forEach((s, i) => {
      const story = document.createElement("div");
      story.classList.add("story");
      const img = document.createElement("img");
      img.src = s.imageUrl;
      const author = document.createElement("div");
      author.classList.add("author");
      author.innerHTML = s.author;
  
      story.appendChild(img);
      story.appendChild(author);
  
      stories.appendChild(story);
  
      story.addEventListener("click", () => {
        showFullView(i);
      });
    });
  };
  
  createStories();
  
  const showFullView = (index) => {
    currentActive = index;
    updateFullView();
    storiesFullView.classList.add("active");
  };
  
  closeBtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
  });
  
  const updateFullView = () => {
    storyImageFull.src = allStories[currentActive].imageUrl;
    storyAuthorFull.innerHTML = allStories[currentActive].author;
  };
  
  nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
  });
  
  previousBtn.addEventListener("click", () => {
    storiesContent.scrollLeft -= 300;
  });
  
  storiesContent.addEventListener("scroll", () => {
    if (storiesContent.scrollLeft <= 24) {
      previousBtn.classList.remove("active");
    } else {
      previousBtn.classList.add("active");
    }
  
    let maxScrollValue =
      storiesContent.scrollWidth - storiesContent.clientWidth - 24;
  
    if (storiesContent.scrollLeft >= maxScrollValue) {
      nextBtn.classList.remove("active");
    } else {
      nextBtn.classList.add("active");
    }
  });
  
  nextBtnFull.addEventListener("click", () => {
    if (currentActive >= allStories.length - 1) {
      return;
    }
    currentActive++;
    updateFullView();
  });
  
  previousBtnFull.addEventListener("click", () => {
    if (currentActive <= 0) {
      return;
    }
    currentActive--;
    updateFullView();
  });
  