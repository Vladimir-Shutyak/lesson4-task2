import sort from '../sorting';
const input = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
const recieved = sort(input);
const exptected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
test('should toEqual users array', ()=>{
    expect(recieved).toEqual(exptected)
});