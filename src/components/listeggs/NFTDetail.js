import "./listeggs.css"
const formatStringToCamelCase = (str) => {
    const splitted = str.split("-");
    if (splitted.length === 1) return splitted[0];
    return (
      splitted[0] +
      splitted
        .slice(1)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join("")
    );
  };
  
  export const getStyleObjectFromString = (str) => {
    const style = {};
    str.split(";").forEach((el) => {
      const [property, value] = el.split(":");
      if (!property) return;
  
      const formattedProperty = formatStringToCamelCase(property.trim());
      style[formattedProperty] = value.trim();
    });
  
    return style;
  };
  const NFTDetail = () => {
    return (
      <div _ngcontent-fah-c200="" className="mb-8 mt-30">
        <div
          _ngcontent-fah-c165=""
          className="mx-auto lg:flex lg:flex-row lg:justify-between max-w-full sm:w-[80rem] mt-[61px] mb-[20px]"
        >
          <div
            _ngcontent-fah-c165=""
            className="clash-display-title font-semibold text-[48px]"
          >
            {" "}
            NFTs Detail{" "}
          </div>
          <div
            _ngcontent-fah-c165=""
            className="flex items-center pl-3 pr-0 max-w-full sm:max-w-7xl text-white inter"
          >
            <div
              _ngcontent-fah-c165=""
              className="flex flex-row flex-wrap items-center text-xl sm:text-2xl gap-2"
            >
              <a _ngcontent-fah-c165="" href="/">
                <img
                  _ngcontent-fah-c165=""
                  src="https://fruitsnft.io/assets/icons/home-fill.png"
                  alt="logo"
                  className="w-[24px] h-[24px]"
                />
              </a>{" "}
              /{" "}
              <a
                _ngcontent-fah-c165=""
                href="/nft/collection"
                className="hover:underline"
              >
                {" "}
                NFT Collection{" "}
              </a>{" "}
              /{" "}
              <a
                _ngcontent-fah-c165=""
                className="hover:underline"
                href="/nft/collection/4"
              >
                {" "}
                Game{" "}
              </a>
              <div
                _ngcontent-fah-c165=""
                className="line-clamp-1 max-w-100"
              >
                / NFT Detail
              </div>
              <div
                _ngcontent-fah-c165=""
                className="line-clamp-1 max-w-100"
              >
                {" "}
                / GEW-661d5f8198a76181d768adfc-1713201141832{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          _ngcontent-fah-c165=""
          className="box-border p-[32px] rounded-[24px] info-background inline-block w-[95%] lg:w-[80rem] mb-[20px] lg:mb-[50px]"
        >
          <div _ngcontent-fah-c165="" className="max-w-full sm:max-w-7xl">
            <div
              _ngcontent-fah-c165=""
              className="w-full mx-auto gap-8 flex flex-col sm:flex-col lg:flex-row"
            >
              <div _ngcontent-fah-c165="" className="sm:w-full lg:w-1/2">
                <div
                  _ngcontent-fah-c165=""
                  className="cursor-pointer h-auto ng-star-inserted"
                >
                  <div _ngcontent-fah-c165="" className="inline-block">
                    <img
                      _ngcontent-fah-c165=""
                      alt=""
                      className="rounded-xl object-contain max-h-[500px]"
                      style={getStyleObjectFromString("display: block;")}
                      id="4025020572239986688"
                      src="https://frnft.io/prod/MFT/1713201142321-64be831cd28e9d3a733d1854.png"
                    />
                    <img
                      _ngcontent-fah-c165=""
                      alt=""
                      src="assets/images/loading.gif"
                      className="rounded-xl max-h-[500px]"
                      style={getStyleObjectFromString("display: none;")}
                      id="40250205722399866881"
                    />
                  </div>
                </div>
                <div _ngcontent-fah-c165="" className="py-5 ng-star-inserted">
                  <game-attributes _ngcontent-fah-c165="" _nghost-fah-c164="">
                    <div
                      _ngcontent-fah-c164=""
                      className="inter panel top-rounded ng-star-inserted"
                    >
                      <div _ngcontent-fah-c164="" className="flex flex-row">
                        <span _ngcontent-fah-c164="" className="pl-[9px]">
                          Attributes
                        </span>
                      </div>
                      <div _ngcontent-fah-c164="" className="cursor-pointer">
                        <img
                          _ngcontent-fah-c164=""
                          src="https://fruitsnft.io/assets/icons/arrow-up.png"
                          height="24"
                          width="24"
                          alt="logo"
                          className="w-[24px] h-[24px] ng-star-inserted"
                        />
                      </div>
                    </div>
                    <div
                      _ngcontent-fah-c164=""
                      className="inter rounded-[13px] ng-star-inserted"
                    >
                      <div _ngcontent-fah-c164="" className="grid w-full">
                        <div
                          _ngcontent-fah-c164=""
                          className="rounded-b-[16px] border-[2px] grid gap-4 grid-cols-3 p-[10px]"
                        >
                          <fuse-card
                            _ngcontent-fah-c164=""
                            className="flex flex-col max-w-80 w-full filter-article border-[2px] bg-transparent ng-tns-c163-14 ng-star-inserted"
                          >
                            <div
                              _ngcontent-fah-c164=""
                              className="p-[15px] ng-tns-c163-14 ng-star-inserted"
                            >
                              <div
                                _ngcontent-fah-c164=""
                                className="font-semibold leading-tight"
                              >
                                {" "}
                                Name{" "}
                              </div>
                              <div
                                _ngcontent-fah-c164=""
                                className="mat-tooltip-trigger mt-2 content-ellipsis"
                                aria-describedby="cdk-describedby-message-71"
                                cdk-describedby-host="0"
                              >
                                {" "}
                                Egg (卵){" "}
                              </div>
                            </div>
                          </fuse-card>
                          <fuse-card
                            _ngcontent-fah-c164=""
                            className="flex flex-col max-w-80 w-full filter-article border-[2px] bg-transparent ng-tns-c163-15 ng-star-inserted"
                          >
                            <div
                              _ngcontent-fah-c164=""
                              className="p-[15px] ng-tns-c163-15 ng-star-inserted"
                            >
                              <div
                                _ngcontent-fah-c164=""
                                className="font-semibold leading-tight"
                              >
                                {" "}
                                Rarity{" "}
                              </div>
                              <div
                                _ngcontent-fah-c164=""
                                className="mat-tooltip-trigger mt-2 content-ellipsis"
                                aria-describedby="cdk-describedby-message-72"
                                cdk-describedby-host="0"
                              >
                                {" "}
                                Rare{" "}
                              </div>
                            </div>
                          </fuse-card>
                          <fuse-card
                            _ngcontent-fah-c164=""
                            className="flex flex-col max-w-80 w-full filter-article border-[2px] bg-transparent ng-tns-c163-16 ng-star-inserted"
                          >
                            <div
                              _ngcontent-fah-c164=""
                              className="p-[15px] ng-tns-c163-16 ng-star-inserted"
                            >
                              <div
                                _ngcontent-fah-c164=""
                                className="font-semibold leading-tight"
                              >
                                {" "}
                                Father{" "}
                              </div>
                              <div
                                _ngcontent-fah-c164=""
                                className="mat-tooltip-trigger mt-2 content-ellipsis"
                                aria-describedby="cdk-describedby-message-73"
                                cdk-describedby-host="0"
                              >
                                {" "}
                                BCW (BCW) - Rare{" "}
                              </div>
                            </div>
                          </fuse-card>
                          <fuse-card
                            _ngcontent-fah-c164=""
                            className="flex flex-col max-w-80 w-full filter-article border-[2px] bg-transparent ng-tns-c163-17 ng-star-inserted"
                          >
                            <div
                              _ngcontent-fah-c164=""
                              className="p-[15px] ng-tns-c163-17 ng-star-inserted"
                            >
                              <div
                                _ngcontent-fah-c164=""
                                className="font-semibold leading-tight"
                              >
                                {" "}
                                Mother{" "}
                              </div>
                              <div
                                _ngcontent-fah-c164=""
                                className="mat-tooltip-trigger mt-2 content-ellipsis"
                                aria-describedby="cdk-describedby-message-74"
                                cdk-describedby-host="0"
                              >
                                {" "}
                                Princey (プリンシー) - Rare{" "}
                              </div>
                            </div>
                          </fuse-card>
                        </div>
                      </div>
                    </div>
                  </game-attributes>
                </div>
              </div>
              <div
                _ngcontent-fah-c165=""
                className="sm:w-full lg:w-1/2 text-left align-middle"
              >
                <div
                  _ngcontent-fah-c165=""
                  className="flex flex-row justify-between items-center mb-2 mt-[-12px]"
                >
                  <div
                    _ngcontent-fah-c165=""
                    className="inter font-semibold text-[18px] text-[#85898A]"
                  >
                    {" "}
                    MFT#9797{" "}
                  </div>
                  <div _ngcontent-fah-c165="">
                    <div
                      _ngcontent-fah-c165=""
                      className="text-right min-w-[150px] flex flex-row justify-end"
                    >
                      <button
                        _ngcontent-fah-c165=""
                        mattooltip="Share"
                        mattooltipclassName="button-menu-tooltip"
                        mattooltipposition="above"
                        className="mat-tooltip-trigger w-[40px] h-[40px] flex justify-center items-center border-[1px] border-[#85898A] rounded-[50%] button-bg hover:border-0"
                        aria-describedby="cdk-describedby-message-67"
                        cdk-describedby-host="0"
                      >
                        <img
                          _ngcontent-fah-c165=""
                          src="https://fruitsnft.io/assets/button/share-icon.svg"
                          alt="logo"
                          className="w-[16px] h-[16px]"
                        />
                      </button>
                      <mat-menu
                        _ngcontent-fah-c165=""
                        yposition="below"
                        xposition="before"
                        className="ng-star-inserted"
                      ></mat-menu>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-fah-c165=""
                  className="flex flex-row justify-between mb-2 mt-[-12px]"
                >
                  <div
                    _ngcontent-fah-c165=""
                    mattooltipclassName="full-tooltip"
                    className="mat-tooltip-trigger py-2 pr-[10px] line-clamp-1 text-ellipsis max-w-[100%]"
                    aria-describedby="cdk-describedby-message-68"
                    cdk-describedby-host="0"
                  >
                    <span
                      _ngcontent-fah-c165=""
                      className="clash-display normal font-semibold text-[32px] text-white break-all"
                    >
                      GEW-661d5f8198a76181d768adfc-1713201141832
                    </span>
                  </div>
                </div>
                <div _ngcontent-fah-c165="" className="flex ng-star-inserted">
                  <div
                    _ngcontent-fah-c165=""
                    className="flex flex-row gap-3 max-w-full md:w-auto h-auto items-start sp:items-center mb-5 break-all flex-wrap"
                  >
                    <div
                      _ngcontent-fah-c165=""
                      className="min-w-fit flex items-center px-[12px] py-[8px] bg-[#444448] rounded-[8px] gap-4 h-[50px] cursor-pointer hover:bg-[#313133]"
                    >
                      <img
                        _ngcontent-fah-c165=""
                        src="https://fruitsnft.io/assets/icons/owners-icon.png"
                        alt="icon"
                        className="w-[20px] h-[20px]"
                      />
                      <button _ngcontent-fah-c165="" className="button-owners">
                        <span
                          _ngcontent-fah-c165=""
                          className="inter font-normal text-[14px] text-white"
                        >
                          1 owners
                        </span>
                      </button>
                    </div>
                    <div
                      _ngcontent-fah-c165=""
                      className="min-w-fit flex items-center px-[12px] py-[8px] bg-[#444448] rounded-[8px] gap-4 h-[50px]"
                    >
                      <img
                        _ngcontent-fah-c165=""
                        src="https://fruitsnft.io/assets/icons/items-icon.png"
                        alt="icon"
                        className="w-[20px] h-[20px]"
                      />
                      <div _ngcontent-fah-c165="">
                        <span
                          _ngcontent-fah-c165=""
                          className="inter font-normal text-[14px] text-white"
                        >
                          1 items
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-fah-c165=""
                  className="rounded-[16px] bg-[#313133] inter mb-[20px]"
                >
                  <div
                    _ngcontent-fah-c165=""
                    className="flex p-[20px] border-b-[1px] border-[#000000]"
                  >
                    <img
                      _ngcontent-fah-c165=""
                      src="https://fruitsnft.io/assets/icons/description-fill.png"
                      alt="logo"
                      className="w-[24px] h-[24px] mr-[10px]"
                    />
                    <span
                      _ngcontent-fah-c165=""
                      className="font-semibold text-[14px] text-white"
                    >
                      Description
                    </span>
                  </div>
                  <p
                    _ngcontent-fah-c165=""
                    fusescrollbar=""
                    className="break-words font-normal max-h-[146px] nft-detail p-[20px] text-[#BCC0C2] text-[14px] whitespace-pre-line ps"
                  >
                    {" "}
                    GEW-661d5f8198a76181d768adfc-1713201141832{" "}
                    <div
                      className="ps__rail-x"
                      style={getStyleObjectFromString("left: 0px; bottom: 0px;")}
                    >
                      <div
                        className="ps__thumb-x"
                        tabindex="0"
                        style={getStyleObjectFromString("left: 0px; width: 0px;")}
                      ></div>
                    </div>
                    <div
                      className="ps__rail-y"
                      style={getStyleObjectFromString("top: 0px; right: 0px;")}
                    >
                      <div
                        className="ps__thumb-y"
                        tabindex="0"
                        style={getStyleObjectFromString("top: 0px; height: 0px;")}
                      ></div>
                    </div>
                  </p>
                </div>
                <div
                  _ngcontent-fah-c165=""
                  className="inter border-[2px] border-[#313133] rounded-[16px] mb-[20px]"
                >
                  <div
                    _ngcontent-fah-c165=""
                    className="flex justify-between px-[20px] border-b-2 border-[#313133] leading-[60px]"
                  >
                    <div
                      _ngcontent-fah-c165=""
                      className="font-semibold text-[14px] text-[#85898A]"
                    >
                      Mint date
                    </div>
                    <div
                      _ngcontent-fah-c165=""
                      className="font-normal text-[14px] text-white"
                    >
                      <span _ngcontent-fah-c165="">Apr 16, 2024 12:13 AM</span>
                    </div>
                  </div>
                  <div
                    _ngcontent-fah-c165=""
                    className="flex justify-between px-[20px] border-b-2 border-[#313133] leading-[60px]"
                  >
                    <div
                      _ngcontent-fah-c165=""
                      className="font-semibold text-[14px] text-[#85898A]"
                    >
                      Royalties Owner
                    </div>
                    <div
                      _ngcontent-fah-c165=""
                      mattooltipclassName="break-all"
                      className="mat-tooltip-trigger font-semibold text-[14px] text-[#ED6D00] line-clamp-1 text-ellipsis ... max-w-[50%] sm:max-w-[70%]"
                      aria-describedby="cdk-describedby-message-69"
                      cdk-describedby-host="0"
                    >
                      <a
                        _ngcontent-fah-c165=""
                        className="break-all ng-star-inserted"
                        href="/nft/accounts/AKYUBNK4PEQC3Q6B62WX9V4Y"
                      >
                        {" "}
                        FRUITS-AKYU-BNK4-PEQC-3Q6B-62WX-9V4Y{" "}
                      </a>
                    </div>
                  </div>
                  <div
                    _ngcontent-fah-c165=""
                    className="flex justify-between px-[20px] border-[#313133] leading-[60px]"
                  >
                    <div
                      _ngcontent-fah-c165=""
                      className="font-semibold text-[14px] text-[#85898A]"
                    >
                      Royalties
                    </div>
                    <div
                      _ngcontent-fah-c165=""
                      className="font-semibold text-[14px] text-[#FFFFFF]"
                    >
                      10 %
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-fah-c165=""
                  className="border-2 border-[#313133] rounded-[16px] overflow-hidden max-h-[430px]"
                >
                  <div _ngcontent-fah-c165="" className="ng-star-inserted">
                    <div
                      _ngcontent-fah-c165=""
                      className="font-semibold text-[14px] text-white m-[20px] ng-star-inserted"
                    >
                      {" "}
                      Please login to access more functions.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              _ngcontent-fah-c165=""
              className="nft-detail-table mt-8 border-[1px] rounded-[18px]"
            >
              <table
                _ngcontent-fah-c165=""
                mat-table=""
                className="mat-table cdk-table w-full rounded-2xl inter history"
                role="table"
              >
                <thead >
                  <tr
                    _ngcontent-fah-c165=""
                    role="row"
                    mat-header-row=""
                    className="mat-header-row cdk-header-row ng-star-inserted"
                  >
                    <th
                      _ngcontent-fah-c165=""
                      role="columnheader"
                      mat-header-cell=""
                      className="mat-header-cell cdk-header-cell cdk-column-transactionId mat-column-transactionId border-none break-all font-semibold rounded-tl-[16px] text-[14px] text-white w-1/6 ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        Transaction ID
                      </div>
                    </th>
                    <th
                      _ngcontent-fah-c165=""
                      role="columnheader"
                      mat-header-cell=""
                      className="mat-header-cell cdk-header-cell cdk-column-price mat-column-price border-none break-all font-semibold inter text-[14px] text-white w-1/6 ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2 ng-star-inserted">
                        Unit Price
                      </div>
                    </th>
                    <th
                      _ngcontent-fah-c165=""
                      role="columnheader"
                      mat-header-cell=""
                      className="mat-header-cell cdk-header-cell cdk-column-quantity mat-column-quantity border-none break-all font-semibold inter text-[14px] text-white w-1/6 ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        Quantity
                      </div>
                    </th>
                    <th
                      _ngcontent-fah-c165=""
                      role="columnheader"
                      mat-header-cell=""
                      className="mat-header-cell cdk-header-cell cdk-column-date mat-column-date border-none break-all font-semibold inter text-[14px] text-white w-1/6 ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        Date
                      </div>
                    </th>
                    <th
                      _ngcontent-fah-c165=""
                      role="columnheader"
                      mat-header-cell=""
                      className="mat-header-cell cdk-header-cell cdk-column-seller mat-column-seller border-none break-all font-semibold inter text-[14px] text-white w-1/6 ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        From
                      </div>
                    </th>
                    <th
                      _ngcontent-fah-c165=""
                      role="columnheader"
                      mat-header-cell=""
                      className="mat-header-cell cdk-header-cell cdk-column-buyer mat-column-buyer border-none break-all font-semibold inter rounded-tr-[16px] text-[14px] text-white w-1/6 ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        To
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody >
                  <tr
                    _ngcontent-fah-c165=""
                    role="row"
                    mat-row=""
                    className="mat-row cdk-row border-b-[#444448] border-b-[1px] ng-star-inserted"
                  >
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Transaction ID"
                      className="mat-cell cdk-cell cdk-column-transactionId mat-column-transactionId border-none break-all no-paginator text-left ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2 md:ml-0">
                        <a
                          _ngcontent-fah-c165=""
                          
                          className="text-[#ED6D00] hover:underline cursor-pointer font-semibold text-[14px]"
                          href="https://fruitscan.io/?action=transaction&amp;id=7534778575405670836"
                        >
                          {" "}
                          7534778575405670836{" "}
                        </a>
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Price"
                      className="mat-cell cdk-cell text-left font-semibold text-[14px] text-[#BCC0C2] border-none break-all cdk-column-price mat-column-price ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        0 FRTS
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Quantity"
                      className="mat-cell cdk-cell text-left font-normal text-[14px] text-[#BCC0C2] border-none break-all cdk-column-quantity mat-column-quantity ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        {" "}
                        1{" "}
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Date"
                      className="mat-cell cdk-cell text-left font-normal text-[14px] text-[#BCC0C2] border-none break-all cdk-column-date mat-column-date ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        Apr 16, 2024 12:18 AM
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="From"
                      className="mat-cell cdk-cell text-left border-none break-all cdk-column-seller mat-column-seller ng-star-inserted"
                    >
                      <a
                        _ngcontent-fah-c165=""
                        mattooltipclassName="break-words overflow-auto"
                        mattooltipposition="below"
                        className="mat-tooltip-trigger text-[#ED6D00] hover:underline cursor-pointer font-normal text-[14px] line-clamp-1 text-ellipsis pr-[10px] break-all ml-2 touch-auto ng-star-inserted"
                        href="/nft/accounts/AKYUBNK4PEQC3Q6B62WX9V4Y"
                        aria-describedby="cdk-describedby-message-69"
                        cdk-describedby-host="0"
                      >
                        {" "}
                        FRUITS-AKYU-BNK4-PEQC-3Q6B-62WX-9V4Y{" "}
                      </a>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="To"
                      className="mat-cell cdk-cell cdk-column-buyer mat-column-buyer border-none break-all no-paginator text-left to ng-star-inserted"
                    >
                      <a
                        _ngcontent-fah-c165=""
                        mattooltipclassName="break-words overflow-auto"
                        mattooltipposition="below"
                        className="mat-tooltip-trigger text-[#ED6D00] hover:underline cursor-pointer font-normal text-[14px] line-clamp-1 text-ellipsis pr-[10px] break-all ml-2 touch-auto ng-star-inserted"
                        href="/nft/accounts/L6NK2GWEH9XZ4NGELEE4ECVT"
                        aria-describedby="cdk-describedby-message-70"
                        cdk-describedby-host="0"
                      >
                        {" "}
                        FRUITS-L6NK-2GWE-H9XZ-4NGE-LEE4-ECVT{" "}
                      </a>
                    </td>
                  </tr>
                  <tr
                    _ngcontent-fah-c165=""
                    role="row"
                    mat-row=""
                    className="mat-row cdk-row border-b-[0px] ng-star-inserted"
                  >
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Transaction ID"
                      className="mat-cell cdk-cell cdk-column-transactionId mat-column-transactionId border-none break-all no-paginator text-left ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2 md:ml-0">
                        <a
                          _ngcontent-fah-c165=""
                          
                          className="text-[#ED6D00] hover:underline cursor-pointer font-semibold text-[14px]"
                          href="https://fruitscan.io/?action=transaction&amp;id=1496051967355945369"
                        >
                          {" "}
                          1496051967355945369{" "}
                        </a>
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Price"
                      className="mat-cell cdk-cell text-left font-semibold text-[14px] text-[#BCC0C2] border-none break-all cdk-column-price mat-column-price ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        0 FRTS
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Quantity"
                      className="mat-cell cdk-cell text-left font-normal text-[14px] text-[#BCC0C2] border-none break-all cdk-column-quantity mat-column-quantity ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        {" "}
                        1{" "}
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="Date"
                      className="mat-cell cdk-cell text-left font-normal text-[14px] text-[#BCC0C2] border-none break-all cdk-column-date mat-column-date ng-star-inserted"
                    >
                      <div _ngcontent-fah-c165="" className="ml-2">
                        Apr 16, 2024 12:12 AM
                      </div>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="From"
                      className="mat-cell cdk-cell text-left border-none break-all cdk-column-seller mat-column-seller ng-star-inserted"
                    >
                      <a
                        _ngcontent-fah-c165=""
                        mattooltipclassName="break-words overflow-auto"
                        mattooltipposition="below"
                        className="mat-tooltip-trigger text-[#ED6D00] hover:underline cursor-pointer font-normal text-[14px] line-clamp-1 text-ellipsis pr-[10px] break-all ml-2 touch-auto ng-star-inserted"
                        href="/nft/accounts/AKYUBNK4PEQC3Q6B62WX9V4Y"
                        aria-describedby="cdk-describedby-message-69"
                        cdk-describedby-host="0"
                      >
                        {" "}
                        FRUITS-AKYU-BNK4-PEQC-3Q6B-62WX-9V4Y{" "}
                      </a>
                    </td>
                    <td
                      _ngcontent-fah-c165=""
                      role="cell"
                      mat-cell=""
                      data-label="To"
                      className="mat-cell cdk-cell cdk-column-buyer mat-column-buyer border-none break-all no-paginator text-left to ng-star-inserted"
                    >
                      <a
                        _ngcontent-fah-c165=""
                        mattooltipclassName="break-words overflow-auto"
                        mattooltipposition="below"
                        className="mat-tooltip-trigger text-[#ED6D00] hover:underline cursor-pointer font-normal text-[14px] line-clamp-1 text-ellipsis pr-[10px] break-all ml-2 touch-auto ng-star-inserted"
                        href="/nft/my-nfts"
                      >
                        {" "}
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot
                  
                  className="mat-table-sticky"
                  style={getStyleObjectFromString(
                    "display: none; bottom: 0px; z-index: 10;"
                  )}
                ></tfoot>
              </table>
              <div _ngcontent-fah-c165="" hidden="true">
                <mat-paginator
                  _ngcontent-fah-c165=""
                  role="group"
                  className="mat-paginator rounded-bl-[16px] rounded-br-[16px] bg-[#313133] inter text-[#BCC0C2] font-semibold border-t-[1px] rounded-b-2xl"
                >
                  <div className="mat-paginator-outer-container">
                    <div className="mat-paginator-container">
                      <div className="mat-paginator-page-size ng-star-inserted">
                        <div className="mat-paginator-page-size-label">
                          {" "}
                          Items per page:{" "}
                        </div>
                        <mat-form-field className="mat-form-field mat-paginator-page-size-select ng-tns-c28-12 mat-primary mat-form-field-type-mat-select mat-form-field-appearance-fill mat-form-field-can-float ng-star-inserted mat-form-field-should-float">
                          <div className="mat-form-field-wrapper ng-tns-c28-12">
                            <div className="mat-form-field-flex ng-tns-c28-12">
                              <div className="mat-form-field-infix ng-tns-c28-12">
                                <mat-select
                                  role="combobox"
                                  aria-autocomplete="none"
                                  aria-haspopup="true"
                                  className="mat-select ng-tns-c120-13 ng-tns-c28-12 ng-star-inserted"
                                  id="mat-select-6"
                                  tabindex="0"
                                  aria-expanded="false"
                                  aria-label="Items per page:"
                                  aria-required="false"
                                  aria-disabled="false"
                                  aria-invalid="false"
                                >
                                  <div
                                    cdk-overlay-origin=""
                                    className="mat-select-trigger ng-tns-c120-13"
                                  >
                                    <div
                                      className="mat-select-value ng-tns-c120-13"
                                      id="mat-select-value-7"
                                    >
                                      <span className="mat-select-value-text ng-tns-c120-13 ng-star-inserted">
                                        <span className="mat-select-min-line ng-tns-c120-13 ng-star-inserted">
                                          10
                                        </span>
                                      </span>
                                    </div>
                                    <div className="mat-select-arrow-wrapper ng-tns-c120-13">
                                      <div className="mat-select-arrow ng-tns-c120-13"></div>
                                    </div>
                                  </div>
                                </mat-select>
                                <span className="mat-form-field-label-wrapper ng-tns-c28-12"></span>
                              </div>
                            </div>
                            <div className="mat-form-field-underline ng-tns-c28-12 ng-star-inserted">
                              <span className="mat-form-field-ripple ng-tns-c28-12"></span>
                            </div>
                            <div className="mat-form-field-subscript-wrapper ng-tns-c28-12">
                              <div
                                className="mat-form-field-hint-wrapper ng-tns-c28-12 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                style={getStyleObjectFromString(
                                  "opacity: 1; transform: translateY(0%);"
                                )}
                              >
                                <div className="mat-form-field-hint-spacer ng-tns-c28-12"></div>
                              </div>
                            </div>
                          </div>
                        </mat-form-field>
                      </div>
                      <div className="mat-paginator-range-actions">
                        <div className="mat-paginator-range-label"> 1 – 2 of 2 </div>
                        <button
                          mat-icon-button=""
                          type="button"
                          className="mat-focus-indicator mat-tooltip-trigger mat-paginator-navigation-first mat-icon-button mat-button-base mat-button-disabled ng-star-inserted"
                          aria-label="First page"
                          disabled="true"
                        >
                          <span className="mat-button-wrapper">
                            <svg
                              viewBox="0 0 24 24"
                              focusable="false"
                              className="mat-paginator-icon"
                            >
                              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                            </svg>
                          </span>
                          <span
                            matripple=""
                            className="mat-ripple mat-button-ripple mat-button-ripple-round"
                          ></span>
                          <span className="mat-button-focus-overlay"></span>
                        </button>
                        <button
                          mat-icon-button=""
                          type="button"
                          className="mat-focus-indicator mat-tooltip-trigger mat-paginator-navigation-previous mat-icon-button mat-button-base mat-button-disabled"
                          aria-label="Previous page"
                          disabled="true"
                        >
                          <span className="mat-button-wrapper">
                            <svg
                              viewBox="0 0 24 24"
                              focusable="false"
                              className="mat-paginator-icon"
                            >
                              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                            </svg>
                          </span>
                          <span
                            matripple=""
                            className="mat-ripple mat-button-ripple mat-button-ripple-round"
                          ></span>
                          <span className="mat-button-focus-overlay"></span>
                        </button>
                        <button
                          mat-icon-button=""
                          type="button"
                          className="mat-focus-indicator mat-tooltip-trigger mat-paginator-navigation-next mat-icon-button mat-button-base mat-button-disabled"
                          aria-label="Next page"
                          disabled="true"
                        >
                          <span className="mat-button-wrapper">
                            <svg
                              viewBox="0 0 24 24"
                              focusable="false"
                              className="mat-paginator-icon"
                            >
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                          </span>
                          <span
                            matripple=""
                            className="mat-ripple mat-button-ripple mat-button-ripple-round"
                          ></span>
                          <span className="mat-button-focus-overlay"></span>
                        </button>
                        <button
                          mat-icon-button=""
                          type="button"
                          className="mat-focus-indicator mat-tooltip-trigger mat-paginator-navigation-last mat-icon-button mat-button-base mat-button-disabled ng-star-inserted"
                          aria-label="Last page"
                          disabled="true"
                        >
                          <span className="mat-button-wrapper">
                            <svg
                              viewBox="0 0 24 24"
                              focusable="false"
                              className="mat-paginator-icon"
                            >
                              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                            </svg>
                          </span>
                          <span
                            matripple=""
                            className="mat-ripple mat-button-ripple mat-button-ripple-round"
                          ></span>
                          <span className="mat-button-focus-overlay"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </mat-paginator>
              </div>
            </div>
          </div>
          <div _ngcontent-fah-c165="" className="mb-4"></div>
        </div>
      </div>
    );
  };
  
  export { NFTDetail };
  