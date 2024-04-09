const coffeeListElement = document.getElementById('coffee-list');

fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    // Clear existing content
    coffeeListElement.innerHTML = '';
    console.log(data);

    // Loop through the data and create HTML elements
    data.forEach(coffee => {
      const coffeeItem = document.createElement('div');
      coffeeItem.classList.add('mb-6');
      coffeeItem.innerHTML = `
        <div style="position: relative;">
          ${coffee.popular ? '<span style="position: absolute; top: 10px; left: 10px; background-color: #F6C768; color: black; padding: 5px;" class="rounded-md p-1">Popular</span>' : ''}
          <img src=${coffee.image} class="rounded-xl text-xs">
          <div class="text-white">
            <div class="flex justify-between mt-2">
              <p>${coffee.name}</p>
              <p class="bg-[#BEE3CC] text-black text-center w-[60px] p-1 font-bold rounded-md">${coffee.price}</p>
            </div>

            <div class="flex gap-2">
              ${coffee.rating ? `<img src="assets/Star_fill.svg" alt="" class="font-bold">` : `<img src="assets/Star.svg" alt="" class="font-bold">`}
              <p>${coffee.rating ? coffee.rating : 'No rating'}</p>
              <p class="text-[#6F757C]">(${coffee.votes}<span class="text-[#6F757C]"> votes</span>)</p>
              <div class=""> 
              <p class="text-[#ED735D] text-sm font-semibold mt-[5.5px] ml-10">${!coffee.available ? 'Sold Out' : ''}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      coffeeListElement.appendChild(coffeeItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
