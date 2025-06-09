import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location') || 'Houston, TX';
  const status_type = searchParams.get('status_type') || 'ForSale';
  const page = searchParams.get('page') || '0';
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const home_type = searchParams.get('home_type');
  const bedsMin = searchParams.get('bedsMin');
  const bedsMax = searchParams.get('bedsMax');
  const bathsMin = searchParams.get('bathsMin');
  const bathsMax = searchParams.get('bathsMax');
  const sort = searchParams.get('sort') || 'Homes_for_You';

  const queryParams = new URLSearchParams({
    location,
    status_type,
    page,
    ...(minPrice && { minPrice }),
    ...(maxPrice && { maxPrice }),
    ...(home_type && { home_type }),
    ...(bedsMin && parseInt(bedsMin) !== 0 && { bedsMin }),
    ...(bedsMax && parseInt(bedsMax) !== 0 && { bedsMax }),
    ...(bathsMin && parseInt(bathsMin) !== 0 && { bathsMin }),
    ...(bathsMax && parseInt(bathsMax) !== 0 && { bathsMax }),
    sort,
  }).toString();

  const url = `https://zillow69.p.rapidapi.com/search?${queryParams}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'zillow69.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    const result = await response.json();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}