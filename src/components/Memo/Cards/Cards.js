import img1 from './../../../assets/images/17.jpg';
import img2 from './../../../assets/images/2.jpg';
import img3 from './../../../assets/images/3.jpg';
import img4 from './../../../assets/images/4.jpg';
import img5 from './../../../assets/images/5.jpg';
import img6 from './../../../assets/images/6.jpg';
import img7 from './../../../assets/images/7.jpg';
import img8 from './../../../assets/images/8.jpg';
import img9 from './../../../assets/images/9.jpg';
import img10 from './../../../assets/images/10.jpg';
import img11 from './../../../assets/images/11.jpg';
import img12 from './../../../assets/images/12.jpg';
import img13 from './../../../assets/images/13.jpg';
import img14 from './../../../assets/images/14.jpg';
import img15 from './../../../assets/images/15.jpg';
import img16 from './../../../assets/images/16.jpg'; 

class Card {
    constructor (id, flipped, type, src) {
        this.id = id
        this.flipped = flipped
        this.type = type
        this.src = src
        this.solved = false
    }
}

const Cat1 = new Card(
    1,
    false,
    'cat1',
    img1
)

const Cat2 = new Card(
    2,
    false,
    'cat2',
    img2
)

const Cat3 = new Card(
    3,
    false,
    'cat3',
    img3
)

const Cat4 = new Card(
    4,
    false,
    'cat4',
    img4
)

const Cat5 = new Card(
    5,
    false,
    'cat5',
    img5
)

const Cat6 = new Card(
    6,
    false,
    'cat6',
    img6
)

const Cat7 = new Card(
    7,
    false,
    'cat7',
    img7
)

const Cat8 = new Card(
    8,
    false,
    'cat8',
    img8
)

const Cat9 = new Card(
    9,
    false,
    'cat9',
    img9
)

const Cat10 = new Card(
    10,
    false,
    'cat10',
    img10
)

const Cat11 = new Card(
    11,
    false,
    'cat11',
    img11
)

const Cat12 = new Card(
    12,
    false,
    'cat12',
    img12
)

const Cat13 = new Card(
    13,
    false,
    'cat13',
    img13
)

const Cat14 = new Card(
    14,
    false,
    'cat14',
    img14
)

const Cat15 = new Card(
    15,
    false,
    'cat15',
    img15
)

const Cat16 = new Card(
    16,
    false,
    'cat16',
    img16
)

const cards = [Cat1, Cat2, Cat3, Cat4, Cat5, Cat6, Cat7, Cat8, Cat9, Cat10, Cat11, Cat12, Cat13, Cat14, Cat15, Cat16] 

export default cards