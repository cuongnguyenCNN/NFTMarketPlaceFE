
import React from 'react';
import "./listeggs.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import axios from 'axios'; // Import Axios for making HTTP requests

// const renderType = (type) => {
//     const newType = type.toString()
//     if (newType === "1") {
//         return "1 month"
//     }
//     return newType.toString() + "months"
// }
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const ListEggs = () => {
    const eggs = [1,2,3,4,5,6,7,8]; // State to store the eggs data
    // const [loading, setLoading] = useState(true); // State to track loading status

    // useEffect(() => {
    //     // Fetch data from the API endpoint
    //     const fetchData = async () => {
    //         try {
    //             // const response = await axios.get('https://api.game.fiotech.org/api/v1/eggs');
    //             // const response = await axios.get('https://blockchain-game-backend-ruby.onrender.com/api/v1/eggs');
    //             setEggs([1,2,3,4,5]); // Set the fetched data to the state
    //             setLoading(false); // Set loading to false when data is fetched
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData(); // Call the fetchData function when the component mounts
    // }, []); // Empty dependency array to only run the effect once when the component mounts

    // Show loading indicator while fetching data
    // if (loading) {
    //     return <div style={{ width: '100%', textAlign: 'center' }}>
    //         <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" style={{ width: '100px' }} />
    //         <p>Loading...</p>
    //     </div>
    // }

    return (
      <div className="grid container" style={{"max-width":"75%", "margin-left":"12.5%"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {eggs.map((egg, index) => (
              <Grid xs={3}>
                <Item>
                  {' '}
                  <div key={index} className="ng-star-inserted">
                    <div className="flex flex-col items-start p-[16px] h-[408px] bg-[#ffffff1a] rounded-[16px] relative cursor-pointer ng-star-inserted">
                      <a href="/detail" className="mx-auto">
                        <div className="h-[256px] flex items-center rounded-[16px] w-fit">
                          <img
                            alt="nft"
                            className="flex justify-center items-center rounded-[16px] object-contain max-h-[256px] ng-star-inserted"
                            src="https://frnft.io/prod/MFT/1715167991579-64fb0fe6282e77e0dc07d461.png"
                          />
                        </div>
                      </a>
                      <div className="flex flex-col items-start pt-[16px] gap-[16px] w-full">
                        <div className="w-full flex flex-row gap-2">
                          <div className="font-normal text-[16px] text-[#BCC0C2]">Type: 654</div>
                        </div>
                        <div className="w-full flex flex-row gap-2">
                          <div className="font-normal text-[16px] text-[#BCC0C2]">Daily Profit: 54%</div>
                        </div>
                        {/* <div className="w-full">
                                <div className="mat-tooltip-trigger font-bold text-[16px] text-white word-break">{egg.egg_type}</div>
                            </div> */}
                        <div className="font-semibold font-[16px] flex flex-row items-center p-0 gap-[8px] w-full ng-star-inserted">
                          <span className="inter font-semibold text-[16px] text-white">Package:</span>
                          <span className="inter font-bold text-[18px] text-white">123456 USDT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
};

export default ListEggs;
