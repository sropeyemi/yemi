alert('successful');

const coursesData = [
   
    {
      course: 'HOW TO SHOP FOR WEARS',
      description: 'Shopping for breathable, versatile clothing made with cotton fabric sweat shirt.They are perfect to wear everyday!.',
      category: 'Sweat shirt',
      price: 5999,
      image: 'https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=600',
      saved: false
    },
    {
      course: 'TEXTILE TECHNOLOGY',
      description: 'Explore the production and properties of different textiles used in clothing..',
      category: 'Fabric construction',
      price: 5499,
      image: 'https://images.pexels.com/photos/3769010/pexels-photo-3769010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      saved: false
    },
    {
      course: 'FASHION JOURNALISM',
      description: 'Writing and reporting about the fashion industry.',
      category: 'Fashion articles',
      price: 4999,
      image: 'https://images.pexels.com/photos/8117530/pexels-photo-8117530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      saved: false
    },
    {
        course: 'FASHION MERCHANDISING',
        description: 'The business side of the fashion industry.',
        category: 'Trend forcasting',
        price: 5999,
        image: 'https://images.pexels.com/photos/18075377/pexels-photo-18075377/free-photo-of-young-man-in-an-elegant-outfit-sitting-on-the-back-of-a-rusty-truck.jpeg?auto=compress&cs=tinysrgb&w=600'
  ,       saved: false
      },
      {
        course: 'Sustainable Fashion',
        description: 'The growing field of Eco-friendly and Ethical fashion.',
        category: 'Sustainable materials',
        price: 7999,
        image: 'https://images.pexels.com/photos/5710151/pexels-photo-5710151.jpeg?auto=compress&cs=tinysrgb&w=600'
  ,       saved: false
      },
      {
        course: 'COSTUME DESIGN',
        description: 'Designing clothes for theater,film,television productions.',
        category: 'Costume construction techniques',
        price: 6999,
        image: 'https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg?auto=compress&cs=tinysrgb&w=600'
  ,       saved: false
      },
      {
        course: 'GERMENT CONSTRUCTION',
        description: 'Practical aspects of creating clothes.',
        category: 'Cloud Computing',
        price: 4499,
        image: 'https://media.istockphoto.com/id/147044306/photo/workers-at-garment-factory-in-southeast-asia.jpg?b=1&s=612x612&w=0&k=20&c=XGA-cr0pHNyZPqz6-Y2DGqiHZWuhIdozBYfT1Yx3SCM='
  ,       saved: false
      },
     
      {
        course: 'FASHION MARKETING AND BRANDING',
        description: 'Business and marketing aspect of the fashion industry.',
        category: 'Brand development and advertising',
        price: 5499,
        image: 'https://images.pexels.com/photos/5935748/pexels-photo-5935748.jpeg?auto=compress&cs=tinysrgb&w=600'
  ,       saved: false
      },
      {
        course: 'FASHION ILLUSTRATION',
        description: 'Communicate fashion ideas through drawing.',
        category: 'Creating fashion figures',
        price: 5999,
        image: 'https://media.istockphoto.com/id/817094534/photo/watercolor-fashion-illustration-model-in-a-long-dress.jpg?b=1&s=612x612&w=0&k=20&c=iu4u3jyAmyzSDhuM-P4uHJU1TWWwcOhLIR9CXDxJd40='
  ,       saved: false
      },
   
      {
        course: 'FASHION FORCASTING',
        description: 'Predict and analyize upcoming fashion trends.',
        category: 'Trend analysis',
        price: 5999,
        image: 'https://media.istockphoto.com/id/1196029568/photo/augmented-reality-marketing-hand-holding-smart-phone-use-ar-application-to-check-information.jpg?b=1&s=612x612&w=0&k=20&c=9NPQmBFIZT0EX3jcDTlhVHTNaw4V-hCjv3FCE6o-EAs='
  ,       saved: false
      },
      {
        course: 'FASHION BUSINESS',
        description: 'Legal aspect of the fashion industry.learn about intellectual property rights.',
        category: 'Fashion law regulation',
        price: 6999,
        image: 'https://media.istockphoto.com/id/1181346619/photo/we-have-fun-on-work.jpg?b=1&s=612x612&w=0&k=20&c=U6l8eGKHI5Qv9rbvHhlfWh7upXo0VDzS9yxRkBxeugg='
  ,       saved: false
      },

    ];
  
  const sidebar = document.getElementById('sidebar');
  const header = document.getElementById('header');
  
  sidebar.addEventListener('click', function(){
      header.classList.toggle('hide');
  })
  
  const courses = document.getElementById('courses');
  
  const cartNumber = document.getElementById('cartNumber');
  
  const savedNumber = document.getElementById('savedNumber');

  const cartItems = [];

  const savedItems = [];
  
  savedNumber.textContent = savedItems.length;
  cartNumber.textContent = cartItems.length;
  
  const keepCourse = (keepArray, keepNumber, keep, i)=>{
    const duplicate = keepArray.filter((item)=>{
      if(item.course === coursesData[i].course){
        return item;
      }
    })
  
    if(duplicate.length != 0){
      alert(`COURSE ALREADY EXISTS IN ${keep}`);
    }else{
      keepArray.push(coursesData[i]);
      keepNumber.textContent = keepArray.length;
      alert(`COURSE ADDED TO ${keep} SUCCESSFULLY`);
    }
  }
  
  const createCourses = (selectedArray)=>{
    for(let i=0; i<selectedArray.length; i++){
        
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
  
        courses.appendChild(card);
  
        const saveCourse = document.createElement('img');
        saveCourse.setAttribute('class', 'icon');
        saveCourse.setAttribute('alt', 'square');
        saveCourse.setAttribute('src', 'https://cdn3.iconfinder.com/data/icons/feather-5/24/message-square-64.png');
  
  
        card.appendChild(saveCourse);
  
        saveCourse.addEventListener('click', ()=>{
          const duplicate = savedItems.filter((item)=>{
            if(item.course === coursesData[i].course){
              return item;
            }
          })
  
          if(duplicate.length != 0){
            const duplicatePosition = savedItems.indexOf(duplicate[0]);
            savedItems.splice(duplicatePosition,1);
            savedNumber.textContent = savedItems.length;
            alert('COURSE REMOVED FROM SAVED ITEMS');
            saveCourse.style.backgroundColor = 'white';
          }else{
            savedItems.push(coursesData[i]);
            savedNumber.textContent = savedItems.length;
            alert(`COURSE SAVED SUCCESSFULLY`);
            saveCourse.style.backgroundColor = 'rgb(251, 214, 220)';
          }
  
        })
  
      
        const cardImg = document.createElement('img');
  
        cardImg.setAttribute('src', `${selectedArray[i].image}`);
        cardImg.setAttribute('alt', 'Card Image');
        cardImg.setAttribute('class', 'card-img');
  
        card.appendChild(cardImg)
  
        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
  
        card.appendChild(cardBody);

        const title = document.createElement('div');
        title.setAttribute('class', 'title');

        cardBody.appendChild(title);

        const paragraph1 = document.createElement('p');
        const paragraph2 = document.createElement('p');

        title.appendChild(paragraph1);
        title.appendChild(paragraph2);

        paragraph1.textContent = `${selectedArray[i].course}`;
        paragraph2.textContent = `#${selectedArray[i].price}`
  
      
        const description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.textContent = `${selectedArray[i].description}`;
        cardBody.appendChild(description);
  
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to cart';
        cardBody.appendChild(addButton);
  
        addButton.addEventListener('click', ()=>{
            if(cartItems.length ==5){
              alert('CART ALREADY FULL');
              return;
            }
            keepCourse(cartItems,cartNumber, 'CART', i);
        })
  
      }
  }
  
  
  createCourses(coursesData);
  
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  searchButton.addEventListener('click', ()=>{
    const searchedItem = searchInput.value;
  
    const correctItem = coursesData.filter((course) =>{
      if(course.course.toLowerCase().includes(searchedItem.toLowerCase())){
        return course;
      }
    })
  
    courses.innerHTML = '';
    createCourses(correctItem);
  })
  
  const categories = document.getElementById('categories');
  categories.addEventListener('change', ()=>{
    const selectedOption = categories.value;
  
    const correctItems = coursesData.filter((course)=>{
      if(course.category == selectedOption){
        return course;
      }
    })
  
    courses.innerHTML = "";
    createCourses(correctItems);
  })
  
  
  
  const createObject = (object)=>{
    const created = document.createElement(`${object}`);
    return created;
  }
  
  const CART_ITEMS = document.getElementById('CART_ITEMS');
  const CART_BUTTON = document.getElementById('CART_BUTTON');
  
  const ALLITEMS = document.getElementById('ALLITEMS');
  
  const TOTAL_PRICE = document.getElementById('TOTAL_PRICE');
  
  const allPrices = [];
  
  
  CART_BUTTON.addEventListener('click', ()=>{
    CART_ITEMS.classList.toggle('invisible');
    for(let i=0; i<cartItems.length; i++){
      let amount = 1;
      const items = document.createElement('div');
      items.setAttribute('class', 'items');
      ALLITEMS.appendChild(items);
  
      const left = document.createElement('div');
      left.setAttribute('class', 'left');
  
      items.appendChild(left);
  
      const cartImg = document.createElement('img');
      cartImg.setAttribute('src', `${cartItems[i].image}`)
      cartImg.setAttribute('alt', `${cartItems[i].course}`)
      cartImg.setAttribute('class', 'small')
  
      const cartTitle = document.createElement('p')
      cartTitle.textContent = `${cartItems[i].course}`
  
      left.appendChild(cartImg);
      left.appendChild(cartTitle);
  
      const middle = document.createElement('div');
      middle.setAttribute('class', 'middle');
      items.appendChild(middle);
  
      const cartButton1 = createObject('button');
      const cartAmount = createObject('span');
      const cartButton2 = createObject('button');
  
  
  
      cartButton1.textContent = '+';
      cartButton2.textContent = '-';
      cartAmount.textContent = amount;
      if(amount <= 1){
        cartButton2.disabled = true;
      }else{
        cartButton2.disabled = false;
      }
  
      middle.appendChild(cartButton1);
      middle.appendChild(cartAmount);
      middle.appendChild(cartButton2);
  
      const right = document.createElement('div');
      right.setAttribute('class', 'right');
      items.appendChild(right)
  
      const cartPrice = createObject('p');
      cartPrice.textContent = `#${cartItems[i].price}`;
  
      right.appendChild(cartPrice);
  
      cartButton1.addEventListener('click', ()=>{
        amount = amount + 1;
        cartAmount.textContent = amount;
  
        cartItems[i].price = amount * cartItems[i].price;
        cartPrice.textContent = `#${cartItems[i].price}`;
  
        cartButton2.disabled = false;
      })
      cartButton2.addEventListener('click', ()=>{
        if(amount <= 1){
          cartButton2.disabled = true;
          return;
        }else{
          cartButton2.disabled = false;
        }
        amount = amount - 1;
        cartAmount.textContent = amount;
  
        cartItems[i].price = amount * cartItems[i].price;
        cartPrice.textContent = `#${cartItems[i].price}`;

      })
    }
  })
  
  