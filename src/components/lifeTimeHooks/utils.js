function filterPropsData (data) {
  return  data.filter(item => item.age > 35 && item.nationality === 'Ukrainian');
    
}

export { filterPropsData };





//библиотека-совокупность методов