export default function sort(array){
    array.sort(function(a, b) {
        return b.health - a.health;
      });
    return(array);
}