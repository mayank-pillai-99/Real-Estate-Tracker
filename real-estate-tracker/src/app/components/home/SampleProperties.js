import Link from 'next/link';

export default function Properties() {
  const propertyDetails = {
    "searchResults": [
      {
        "property": {
          "zpid": 32030934,
          "address": {
            "streetAddress": "14926 22nd Avenue",
            "zipcode": "11357",
            "city": "Whitestone",
            "state": "NY"
          },
          "media": {
            "propertyPhotoLinks": {
              "mediumSizeLink": "https://photos.zillowstatic.com/fp/5f39ef670a8048e8fc87c82d868c4bf4-p_c.jpg"
            }
          },
          "bathrooms": 4,
          "bedrooms": 6,
          "livingArea": 3319,
          "propertyType": "multiFamily",
          "price": {
            "value": 1699000,
            "pricePerSquareFoot": 512
          },
          "listCardRecommendation": {
            "flexFieldRecommendations": [
              {
                "displayString": "Showcase",
                "flexFieldType": "showcase",
                "contentType": "showcase"
              }
            ]
          },
          "hdpView": {
            "hdpUrl": "/homedetail/MobileAppHDPShopperPlatformServicePage.htm?fromApp=true&p=ipad&variant=SHOWCASE#zpid=32030934&homeDetailsVariant=SHOWCASE&webviewLayout=doubleScroll&showFactsAndFeatures=true&fromApp=true&gmaps=false&streetview=false"
          }
        }
      },
      {
        "property": {
          "zpid": 450046246,
          "address": {
            "streetAddress": "330 Skyline Dr #H",
            "zipcode": "10304",
            "city": "Staten Island",
            "state": "NY"
          },
          "media": {
            "propertyPhotoLinks": {
              "mediumSizeLink": "https://photos.zillowstatic.com/fp/e0d9b56bbc7acbb7cf0d4b602cad8b8f-p_c.jpg"
            }
          },
          "bathrooms": 2,
          "bedrooms": 3,
          "livingArea": 1347,
          "propertyType": "townhome",
          "price": {
            "value": 220000,
            "pricePerSquareFoot": 163
          },
          "listCardRecommendation": {
            "flexFieldRecommendations": [
              {
                "displayString": "Primary bedroom",
                "flexFieldType": "homeInsight",
                "contentType": "homeInsight"
              }
            ]
          },
          "hdpView": {
            "hdpUrl": "/homedetail/MobileAppHDPShopperPlatformServicePage.htm?fromApp=true&p=ipad&variant=FOR_SALE#zpid=450046246&homeDetailsVariant=FOR_SALE&webviewLayout=doubleScroll&showFactsAndFeatures=true&fromApp=true&gmaps=false&streetview=false"
          }
        }
      }
    ]
  };

  return (
    <section className="w-full bg-[#1A3C5A] p-6">
      <h2 className="text-3xl font-bold text-gray-100 mb-10">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {propertyDetails.searchResults.slice(0, 2).map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={property.property.media.propertyPhotoLinks.mediumSizeLink}
              alt={property.property.address.streetAddress}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {property.property.address.streetAddress}
              </h3>
              <p className="text-gray-600">
                {property.property.address.city}, {property.property.address.state} {property.property.address.zipcode}
              </p>
              <p className="text-2xl font-bold text-indigo-600 mt-2">
                ${property.property.price.value.toLocaleString()}
              </p>
              <div className="flex space-x-8 mt-2 text-gray-600">
                <span>{property.property.bedrooms} Beds</span>
                <span>{property.property.bathrooms} Baths</span>
                <span>{property.property.livingArea} sqft</span>
              </div>
              <p className="text-gray-600 mt-2">
                {property.property.listCardRecommendation.flexFieldRecommendations[0].displayString}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/properties">
          <button className="bg-[#D4A017] hover:bg-[#A8B5A2] text-[#333333] py-3 px-8 rounded-lg transition-colors duration-200">
            View More Properties
          </button>
        </Link>
      </div>
    </section>
  );
}