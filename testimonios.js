const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
      name: 'Andrea Rodriguez',
      position: 'Frontend Developer',
      photo:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod. Velit placeat nihil voluptate consectetur provident odit enim error aliquid tenetur, repellendus fuga doloribus facere pariatur hic autem? Molestias, tempore.",
    },
    {
      name: 'Carolina Sanchez',
      position: 'Software Engineer',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod. Velit placeat nihil voluptate consectetur provident odit enim error aliquid tenetur, repellendus fuga doloribus facere pariatur hic autem? Molestias, tempore.',
    },
    {
      name: 'Alejandra Suarez',
      position: 'Data Entry',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod. Velit placeat nihil voluptate consectetur provident odit enim error aliquid tenetur, repellendus fuga doloribus facere pariatur hic autem? Molestias, tempore.",
    },

  ]

let idx = 1

function actualizarTestimonio() {
    const {name, position, photo, text} = testimonials[idx];

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
    
}

setInterval(actualizarTestimonio, 10000);