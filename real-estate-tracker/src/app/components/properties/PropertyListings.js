import Link from "next/link";

const PropertyListings = () => {
  // Mock data for properties with only the first carousel photo
  const properties = [
      {
          bathrooms: 4,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/15abcdb7b6f669322a6404dc20088e02-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.28877,
          livingArea: 2408,
          address: "6803 Lakemont Dr, Houston, TX 77050",
          rentZestimate: 2460,
          priceChange: null,
          zestimate: 294300,
          imgSrc: "https://photos.zillowstatic.com/fp/15abcdb7b6f669322a6404dc20088e02-p_e.jpg",
          latitude: 29.904768,
          price: 299900,
          bedrooms: 3,
          lotAreaValue: 10105.92,
          lotAreaUnit: "sqft",
          listingStatus: "FOR_SALE",
          zpid: "28342136",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/6803-Lakemont-Dr-Houston-TX-77050/28342136_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 4,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/1842ac838e2570e366a160f907edf690-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.19856,
          livingArea: 4899,
          address: "13013 Columbine Ln, Houston, TX 77049",
          rentZestimate: 1763,
          priceChange: null,
          zestimate: 418600,
          imgSrc: "https://photos.zillowstatic.com/fp/1842ac838e2570e366a160f907edf690-p_e.jpg",
          latitude: 29.835815,
          price: 439000,
          bedrooms: 9,
          lotAreaValue: 0.7851,
          lotAreaUnit: "acres",
          listingStatus: "FOR_SALE",
          zpid: "27923746",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/13013-Columbine-Ln-Houston-TX-77049/27923746_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 2,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/bdf04a4761ccf3d3a205bb5ba605269f-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.19507,
          livingArea: 1178,
          address: "13130 Crystal Cove Dr, Houston, TX 77044",
          rentZestimate: 1535,
          priceChange: null,
          zestimate: 166500,
          imgSrc: "https://photos.zillowstatic.com/fp/bdf04a4761ccf3d3a205bb5ba605269f-p_e.jpg",
          latitude: 29.848175,
          price: 170000,
          bedrooms: 3,
          lotAreaValue: 0.2549,
          lotAreaUnit: "acres",
          listingStatus: "FOR_SALE",
          zpid: "28291933",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/13130-Crystal-Cove-Dr-Houston-TX-77044/28291933_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 8,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/8d40981aac55851487799501af25410b-p_e.jpg" }
          ],
          propertyType: "MULTI_FAMILY",
          longitude: -95.34691,
          livingArea: 5296,
          address: "5038 Mallow St, Houston, TX 77033",
          rentZestimate: 1676,
          priceChange: null,
          zestimate: 715100,
          imgSrc: "https://photos.zillowstatic.com/fp/8d40981aac55851487799501af25410b-p_e.jpg",
          latitude: 29.65945,
          price: 749900,
          bedrooms: 12,
          lotAreaValue: 0.28,
          lotAreaUnit: "acres",
          listingStatus: "FOR_SALE",
          zpid: "84039469",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/5038-Mallow-St-Houston-TX-77033/84039469_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 11,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/c1e9b4d4118bec09b65029e003faccfe-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.47579,
          livingArea: 8843,
          address: "5327 S Braeswood Blvd, Houston, TX 77096",
          rentZestimate: 1806,
          priceChange: null,
          zestimate: null,
          imgSrc: "https://photos.zillowstatic.com/fp/c1e9b4d4118bec09b65029e003faccfe-p_e.jpg",
          latitude: 29.676676,
          price: 3500000,
          bedrooms: 7,
          lotAreaValue: 0.4133,
          lotAreaUnit: "acres",
          listingStatus: "FOR_SALE",
          zpid: "28080739",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/5327-S-Braeswood-Blvd-Houston-TX-77096/28080739_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 3,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/a2e78ce7a36815476b45da5ec92d0011-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.47759,
          livingArea: 2681,
          address: "1902 Chimney Rock Rd, Houston, TX 77056",
          rentZestimate: 4047,
          priceChange: null,
          zestimate: 1129000,
          imgSrc: "https://photos.zillowstatic.com/fp/a2e78ce7a36815476b45da5ec92d0011-p_e.jpg",
          latitude: 29.746738,
          price: 1199000,
          bedrooms: 4,
          lotAreaValue: 0.3229,
          lotAreaUnit: "acres",
          listingStatus: "FOR_SALE",
          zpid: "27963914",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/1902-Chimney-Rock-Rd-Houston-TX-77056/27963914_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 2,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/b3d906be79c36764755def8be0e01c33-p_e.jpg" }
          ],
          propertyType: "TOWNHOUSE",
          longitude: -95.6873,
          livingArea: 2132,
          address: "202 Iris Park Ct, Houston, TX 77094",
          rentZestimate: 2656,
          priceChange: null,
          zestimate: 413700,
          imgSrc: "https://photos.zillowstatic.com/fp/b3d906be79c36764755def8be0e01c33-p_e.jpg",
          latitude: 29.781164,
          price: 399000,
          bedrooms: 2,
          lotAreaValue: 4073,
          lotAreaUnit: "sqft",
          listingStatus: "FOR_SALE",
          zpid: "68419675",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/202-Iris-Park-Ct-Houston-TX-77094/68419675_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 3,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/b8c51f44687bbed9372fe50ea6bcd4c8-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.35692,
          livingArea: 2100,
          address: "4510 Bungalow Ln, Houston, TX 77047",
          rentZestimate: 2004,
          priceChange: -2000,
          zestimate: null,
          imgSrc: "https://photos.zillowstatic.com/fp/b8c51f44687bbed9372fe50ea6bcd4c8-p_e.jpg",
          latitude: 29.631985,
          price: 163000,
          bedrooms: 3,
          lotAreaValue: 7226.604,
          lotAreaUnit: "sqft",
          listingStatus: "FOR_SALE",
          zpid: "28099584",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/4510-Bungalow-Ln-Houston-TX-77047/28099584_zpid/",
          daysOnZillow: 0,
          datePriceChanged: 1746342000000,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 3,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/b175f5d3cf6cccace75a5544cd485215-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.63043,
          livingArea: 3378,
          address: "1543 Adams Walk Ct, Houston, TX 77077",
          rentZestimate: 5149,
          priceChange: null,
          zestimate: 724000,
          imgSrc: "https://photos.zillowstatic.com/fp/b175f5d3cf6cccace75a5544cd485215-p_e.jpg",
          latitude: 29.756256,
          price: 747000,
          bedrooms: 3,
          lotAreaValue: 9212.94,
          lotAreaUnit: "sqft",
          listingStatus: "FOR_SALE",
          zpid: "28534086",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/1543-Adams-Walk-Ct-Houston-TX-77077/28534086_zpid/",
          daysOnZillow: 1,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 2,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/e754bb11132ce739898869d75e452572-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.49873,
          livingArea: 1484,
          address: "7226 Brook Stone Dr, Houston, TX 77040",
          rentZestimate: 1839,
          priceChange: null,
          zestimate: 240400,
          imgSrc: "https://photos.zillowstatic.com/fp/e754bb11132ce739898869d75e452572-p_e.jpg",
          latitude: 29.869696,
          price: 245000,
          bedrooms: 3,
          lotAreaValue: 6599.34,
          lotAreaUnit: "sqft",
          listingStatus: "FOR_SALE",
          zpid: "28149859",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/7226-Brook-Stone-Dr-Houston-TX-77040/28149859_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      },
      {
          bathrooms: 2,
          carouselPhotos: [
              { url: "https://photos.zillowstatic.com/fp/436050af066a70867c4ad4ba365822dc-p_e.jpg" }
          ],
          propertyType: "SINGLE_FAMILY",
          longitude: -95.58838,
          livingArea: 2249,
          address: "11111 Sprucedale Ct, Houston, TX 77070",
          rentZestimate: 2327,
          priceChange: null,
          zestimate: 336900,
          imgSrc: "https://photos.zillowstatic.com/fp/436050af066a70867c4ad4ba365822dc-p_e.jpg",
          latitude: 29.96723,
          price: 341500,
          bedrooms: 3,
          lotAreaValue: 7626,
          lotAreaUnit: "sqft",
          listingStatus: "FOR_SALE",
          zpid: "28554417",
          listingSubType: { is_FSBA: true },
          detailUrl: "/homedetails/11111-Sprucedale-Ct-Houston-TX-77070/28554417_zpid/",
          daysOnZillow: 0,
          country: "USA",
          currency: "USD",
          hasImage: true
      }
  ];

  return (
      <section className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">Available Properties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property) => (
                      <div
                          key={property.zpid}
                          className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                          <img
                              src={property.imgSrc}
                              alt={property.address}
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4 text-[#333333]">
                              <h3 className="text-lg font-semibold text-[#D4A017] mb-2">{property.address}</h3>
                              <p className="text-xl font-bold mb-2">${property.price.toLocaleString()}</p>
                              <div className="flex flex-wrap gap-2 text-sm mb-4">
                                  <span>{property.bedrooms} Beds</span> |
                                  <span>{property.bathrooms} Baths</span> |
                                  <span>{property.livingArea.toLocaleString()} sqft</span> |
                                  <span>
                                      {property.lotAreaValue.toLocaleString()} {property.lotAreaUnit}
                                  </span>
                              </div>
                              <Link
                                  href="./property-details"
                                  className="inline-block bg-[#D4A017] text-[#F9FAFB] font-semibold py-2 px-4 rounded hover:bg-[#b38b14] transition-colors duration-300"
                              >
                                  View More
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
};

export default PropertyListings;