Home.new({
    likes:0,
    linkedin:'https://www.linkedin.com/in/harmandeep-mand-softwarelife/',
    github:'https://github.com/JattCoder',
    email:'harmandeepmand.hm@gmail.com'}).save
About.new({
    name:'Harmandeep S Mand',
    description:'My Name is Harmandeep S Mand, i am Full-Stack Software Engineer in Cleveland, OH. Graduated from Flatiron School. I enjoy building live Application for any platform, either its mobile, desktop or web.'}).save

Apps.new({
    name:'Cricket Standings',
    description:'A --/ B --/ C',
    source:'https://github.com/JattCoder/CWC-Standings.git',
    live:'https://drive.google.com/file/d/1BAnmqnWjSTKrYliZQ-h05GlbB8x1ynom/view?usp=sharing'}).save
Apps.new({
    name:'Tesla Find-Us',
    description:'A --/ B --/ C',
    source:'https://github.com/JattCoder/Meet_Up.git',
    live:'https://drive.google.com/file/d/1KJb345-y7lyJCv4KMCLZsiS8uUubJHud/view?usp=sharing'}).save
Apps.new({
    name:'Google',
    description:'A --/ B --/ C',
    source:'https://github.com/JattCoder/Google.git',
    live:'https://drive.google.com/file/d/1ogWOYmlLWx5iZdI9Ea5yyEaQnhwKPgsu/view?usp=sharing'}).save
Apps.new({
    name:'Meet Up',
    description:'A --/ B --/ C',
    source:'https://github.com/JattCoder/Meet_Up.git',
    live:'https://drive.google.com/file/d/18RXiSXECMGutCQXvij9v7P6eoOEE8Cd1/view?usp=sharing'}).save
Apps.new({
    name:'Portfolio',
    description:'A --/ B --/ C',
    source:'https://github.com/JattCoder/portfolio.git',
    live:'https://drive.google.com/file/d/1lXCpbrt6WjcxwPsjmgwTvLiAdSD_zdr8/view?usp=sharing'}).save

Images.new({
    app_id: Apps.find_by(name: 'Cricket Standings').id,
    url: '../AppImgs/App1/1.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Cricket Standings').id,
    url: '../AppImgs/App1/2.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Cricket Standings').id,
    url: '../AppImgs/App1/3.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Cricket Standings').id,
    url: '../AppImgs/App1/4.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Tesla Find-Us').id,
    url: '../AppImgs/App2/1.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Tesla Find-Us').id,
    url: '../AppImgs/App2/2.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Tesla Find-Us').id,
    url: '../AppImgs/App2/3.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Tesla Find-Us').id,
    url: '../AppImgs/App2/4.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Google').id,
    url: '../AppImgs/App3/1.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Meet Up').id,
    url: '../AppImgs/App4/1.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Meet Up').id,
    url: '../AppImgs/App4/2.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Meet Up').id,
    url: '../AppImgs/App4/3.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Meet Up').id,
    url: '../AppImgs/App4/4.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Portfolio').id,
    url: '../AppImgs/App5/1.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Portfolio').id,
    url: '../AppImgs/App5/2.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Portfolio').id,
    url: '../AppImgs/App5/3.PNG'
}).save
Images.new({
    app_id: Apps.find_by(name: 'Portfolio').id,
    url: '../AppImgs/App5/4.PNG'
}).save

Languages.new({
    name: 'Ruby',
    img: '../Languages/ruby.svg'
}).save
Languages.new({
    name: 'Rails',
    img: '../Languages/rails.svg'
}).save
Languages.new({
    name: 'Javascript',
    img: '../Languages/javascript.svg'
}).save
Languages.new({
    name: 'HTML5',
    img: '../Languages/html5.svg'
}).save
Languages.new({
    name: 'CSS3',
    img: '../Languages/css3.svg'
}).save
Languages.new({
    name: 'React',
    img: '../Languages/react.svg'
}).save
Languages.new({
    name: 'Redux',
    img: '../Languages/redux.svg'
}).save
Languages.new({
    name: 'Java',
    img: '../Languages/java.svg'
}).save
Languages.new({
    name: 'Python',
    img: '../Languages/python.svg'
}).save
Languages.new({
    name: 'C',
    img: '../Languages/c.svg'
}).save
Languages.new({
    name: 'C#',
    img: '../Languages/csharp.svg'
}).save
Languages.new({
    name: 'C++',
    img: '../Languages/cplusplus.svg'
}).save

Quote.new({quote:'How does a project get to be a year late?... One day at a time.'}).save
Quote.new({quote:'Programming can be fun, so can cryptography; however they should not be combined.'}).save
Quote.new({quote:'When to use iterative development? You should use iterative development only on projects that you want to succeed.'}).save
Quote.new({quote:'Simplicity is the soul of efficiency.'}).save
Quote.new({quote:'A good way to stay flexible is to write less code.'}).save
Quote.new({quote:'When debugging, novices insert corrective code; experts remove defective code.'}).save
Quote.new({quote:'Inside every large program, there is a small program trying to get out.'}).save
Quote.new({quote:"Every good work of software starts by scratching a developer's personal itch"}).save
Quote.new({quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'}).save
Quote.new({quote:'The best way to get a project done faster is to start sooner'}).save
