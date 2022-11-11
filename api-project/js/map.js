const initMap=(myJson)=>{
    // document.querySelector(".map").innerHTML="map goes here";
    //initialize map:
// 33.4478679,-112.0550887,17z
const mymap = L.map('my_map').setView([33.4478679,-112.0550887], 10);

//initialize tiles (there are many options):
L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
// L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);
// L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);

// const businesses = [
//     {
//         title: "Black Theatre Troupe Inc.",
//         description: "Text text text text text text text text text text text text text text text text text",
//         lat: 33.4478679,
//         lng: -112.0550887,
//         image_url: "https://static.thenounproject.com/png/54604-200.png",
//         url: "https://www.harkins.com/theatres/scottsdale-101-14/2022-11-03"
//     },
//     {
//         title: "Rita's Italian Ice & Frozen Custard",
//         description: "Italian ices & frozen custards star at this counter-serve chain with a range of other cold treats.",
//         lat: 33.6382338,
//         lng: -111.9804815,
//         image_url: "https://static.thenounproject.com/png/54604-200.png",
//         url: "https://www.harkins.com/theatres/scottsdale-101-14/2022-11-03"
//     },
//     {
//         title: "Harkins Theater",
//         description: "text text text text text text text text text text text text text text text text text",
//         lat: 33.638214,
//         lng: -112.0483331,
//         image_url: "https://static.thenounproject.com/png/54604-200.png",
//         url: "https://www.harkins.com/theatres/scottsdale-101-14/2022-11-03"
//     }
// ];

// https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript#for-of-loop
for (const business of myJson.businesses) {
    // make the marker:
    console.log (business);
    console.log (business.coordinates);
    console.log ([business.coordinates.latitude, business.coordinates.longitude])
    const marker = L.marker(
        [business.coordinates.latitude, business.coordinates.longitude]
    ).addTo(mymap);
    // make the popup:
    marker.bindPopup(`
        <h3>${business.name}</h3>
        <img src="${business.image_url}" />
        <p>${business.display_phone}</p>
        <a href="${business.url}">More Info...</a>
    `);

}
}
export {initMap};