// The problem while using for each operator is that it does not returns the value 

const mynumber=[1,2,3,4,5,6,7,8,9,10]
const newnum=mynumber.filter((num)=>{
    return num>4})// Filter provides a callback function    Have to manditorly write return
console.log(newnum);
//Alternate method
const newnums=[]
mynumber.forEach((nums)=>{
    if(nums>4){
        newnums.push(nums)
    }
})
console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const userbook=books.filter((bk)=>{
    return bk.genre==='History'
  })
  console.log(userbook);
  let userbook2=books.filter((bk)=>{
    return (bk.publish>=1995 && bk.genre==='History')
  })
  console.log(userbook2);

  // The output is of the form of an array 