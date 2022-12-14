import React, { Fragment, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Layouts/Loader/Loader';
import "./index.scss"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const Auth = lazy(() => import('./components/Authentication/firebaseAuth/auth'));
const App = lazy(() => import('./components/app'));
const CardsDesign = lazy(() => import('./components/apps/CardsDesign/CardsDesign'));
const Chat = lazy(() => import('./components/apps/Chat/Chat'));
const Charts = lazy(() => import('./components/apps/Charts/Charts'));
const ContentScrollbar = lazy(() => import('./components/apps/ContentScrollbar/ContentScrollbar'));
const Counters = lazy(() => import('./components/apps/Counters/Counters'));
const CryptoCurrencies = lazy(() => import('./components/apps/Cryptocurrencies/Cryptocurrencies'));
const DefaultCalender = lazy(() => import('./components/apps/DefaultCalender/DefaultCalender'));
const Footers = lazy(() => import('./components/apps/Footers/Footers'));
const FullCalender = lazy(() => import('./components/apps/FullCalender/FullCalender'));
const Loaders = lazy(() => import('./components/apps/Loaders/Loaders'));
const Notifications = lazy(() => import('./components/apps/Notifications/Notifications'));
const RangeSlider = lazy(() => import('./components/apps/RangeSlider/RangeSlider'));
const Rating = lazy(() => import('./components/apps/Rating/Rating'));
const Search = lazy(() => import('./components/apps/Search/Search'));
const Sweet = lazy(() => import('./components/apps/Sweet/Sweet'));
const Timeline = lazy(() => import('./components/apps/Timeline/Timeline'));
const TreeView = lazy(() => import('./components/apps/TreeView/TreeView'));
const Userlist = lazy(() => import('./components/apps/Userlist/Userlist'));
const Error401 = lazy(() => import('./components/Authentication/errorPage/Error401/Error401'));
const Error403 = lazy(() => import('./components/Authentication/errorPage/Error403/Error403'));
const Error404 = lazy(() => import('./components/Authentication/errorPage/Error404/Error404'));
const Error503 = lazy(() => import('./components/Authentication/errorPage/Error503/Error503'));
const ForgotPassword = lazy(() => import('./components/Authentication/Forgot Password/ForgotPassword'));
const LockScreen = lazy(() => import('./components/Authentication/LockScreen/LockScreen'));
const Register = lazy(() => import('./components/Authentication/Register/Register'));
const Accordians = lazy(() => import('./components/bootstrap/Accordians/Accordians'));
const BootstrapAlerts = lazy(() => import('./components/bootstrap/bootstrapAlerts/bootstrapAlerts'));
const AvatarRadius = lazy(() => import('./components/bootstrap/AvatarRadius/AvatarRadius'));
const AvatarSquare = lazy(() => import('./components/bootstrap/AvatarSquare/AvatarSquare'));
const AvatarRounded = lazy(() => import('./components/bootstrap/AvatarRounded/AvatarRounded'));
const BadgesPills = lazy(() => import('./components/bootstrap/BadgesPills/BadgesPills'));
const Breadcrumbs = lazy(() => import('./components/bootstrap/Breadcrumbs/Breadcrumbs'));
const Buttons = lazy(() => import('./components/bootstrap/Buttons/Buttons'));
const Carousels = lazy(() => import('./components/bootstrap/Carousels/Carousels'));
const Colors = lazy(() => import('./components/bootstrap/Colors/Colors'));
const DropDowns = lazy(() => import('./components/bootstrap/DropDowns/DropDowns'));
const ListGroups = lazy(() => import('./components/bootstrap/ListGroup/ListGroups'));
const MediaObject = lazy(() => import('./components/bootstrap/MediaObject/MediaObject'));
const Modals = lazy(() => import('./components/bootstrap/Modal/Modal'));
const Navigation = lazy(() => import('./components/bootstrap/Navigation/Navigation'));
const OffCanvas = lazy(() => import('./components/bootstrap/OffCanvas/OffCanvas'));
const Pagination = lazy(() => import('./components/bootstrap/Pagination/Pagination'));
const Panels = lazy(() => import('./components/bootstrap/Panels/Panels'));
const Progress = lazy(() => import('./components/bootstrap/Progress/Progress'));
const Tabs = lazy(() => import('./components/bootstrap/Tabs/Tabs'));
const Tags = lazy(() => import('./components/bootstrap/Tags/Tags'));
const Thumbnails = lazy(() => import('./components/bootstrap/Thumbnails/Thumbnails'));
const Toast = lazy(() => import('./components/bootstrap/Toast/Toast'));
const TooltipPopover = lazy(() => import('./components/bootstrap/TooltipPopover/TooltipPopover'));
const Typography = lazy(() => import('./components/bootstrap/Typography/Typography'));
const Ribbons = lazy(() => import('./components/bootstrap/Ribbons/Ribbons'));
const Chartjs = lazy(() => import('./components/Charts/Chart Js/Chartjs'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const AddProduct = lazy(() => import('./components/E-commerce/AddProduct/AddProduct'));
const Checkout = lazy(() => import('./components/E-commerce/Checkout/Checkout'));
const ProductDetails = lazy(() => import('./components/E-commerce/ProductDetails/ProductDetails'));
const Shop = lazy(() => import('./components/E-commerce/Shop/Shop'));
const ShoppingCart = lazy(() => import('./components/E-commerce/ShoppingCart/ShoppingCart'));
const Wishlist = lazy(() => import('./components/E-commerce/Wishlist/Wishlist'));
const FileAttachments = lazy(() => import('./components/FileManager/FileAttachments/FileAttachments'));
const FileDetails = lazy(() => import('./components/FileManager/FileDetails/FileDetails'));
const FileManager = lazy(() => import('./components/FileManager/FileManager/FileManager'));
const FileManagerList = lazy(() => import('./components/FileManager/FileManagerList/FileManagerList'));
const BootstrapIcons = lazy(() => import('./components/Icons/BootstrapIcons/BootstrapIcons'));
const FeatherIcons = lazy(() => import('./components/Icons/FeatherIcons/FeatherIcons'));
const FlagIcons = lazy(() => import('./components/Icons/FlagIcons/FlagIcons'));
const FontAwesome = lazy(() => import('./components/Icons/FontAwesome/FontAwesome'));
const IonicIcons = lazy(() => import('./components/Icons/IonicIcons/IonicIcons'));
const MaterialDesignIcons = lazy(() => import('./components/Icons/MaterialDesignIcons/MaterialDesignIcons'));
const Pe7Icons = lazy(() => import('./components/Icons/Pe7Icons/Pe7Icons'));
const SimpleLineIcons = lazy(() => import('./components/Icons/SimpleLineIcons/SimpleLineIcons'));
const ThemifyIcons = lazy(() => import('./components/Icons/ThemifyIcons/ThemifyIcons'));
const TypiconsIcons = lazy(() => import('./components/Icons/TypiconsIcons/TypiconsIcons'));
const WeatherIcons = lazy(() => import('./components/Icons/WeatherIcons/WeatherIcons'));
const LeafletMaps = lazy(() => import('./components/Maps/LeafletMaps/LeafletMaps'));
const SimpleMaps = lazy(() => import('./components/Maps/SimpleMaps/SimpleMaps'));

const Editprofile = lazy(() => import('./components/pages/Editprofile/Editprofile'));
const AboutCompany = lazy(() => import('./components/pages/Extension/AboutCompany/AboutCompany'));
const BlogDetails = lazy(() => import('./components/pages/Extension/BlogDetails/BlogDetails'));
const BlogPost = lazy(() => import('./components/pages/Extension/BlogPost/BlogPost'));
const Blogs = lazy(() => import('./components/pages/Extension/Blogs/Blogs'));
const EmptyPage = lazy(() => import('./components/pages/Extension/EmptyPage/EmptyPage'));
const FAQS = lazy(() => import('./components/pages/Extension/FAQS/FAQS'));
const Invoice = lazy(() => import('./components/pages/Extension/Invoice/Invoice'));
const Pricing = lazy(() => import('./components/pages/Extension/Pricing/Pricing'));
const Services = lazy(() => import('./components/pages/Extension/Services/Services'));
const Settings = lazy(() => import('./components/pages/Extension/Settings/Settings'));
const Terms = lazy(() => import('./components/pages/Extension/Terms/Terms'));
const UnderConstruction = lazy(() => import('./components/pages/Extension/UnderConstruction/UnderConstruction'));
const FormAdvanced = lazy(() => import('./components/pages/forms/FormAdvanced/FormAdvanced'));
const FormEditor = lazy(() => import('./components/pages/forms/FormEditor/FormEditor'));
const FormElements = lazy(() => import('./components/pages/forms/FormElements/FormElements'));
const FormLayouts = lazy(() => import('./components/pages/forms/FormLayouts/FormLayouts'));
const FormValidation = lazy(() => import('./components/pages/forms/FormValidation/FormValidation'));
const FormWizard = lazy(() => import('./components/pages/forms/FormWizard/FormWizard'));
const Gallery = lazy(() => import('./components/pages/Gallery/Gallery'));
const MailCompose = lazy(() => import('./components/pages/MailCompose/MailCompose'));
const MailInbox = lazy(() => import('./components/pages/MailInbox/MailInbox'));
const MailRead = lazy(() => import('./components/pages/MailRead/MailRead'));
const NotificationList = lazy(() => import('./components/pages/NotificationList/NotificationList'));
const Profile = lazy(() => import('./components/pages/Profile/Profile'));
const DataTable = lazy(() => import('./components/pages/tables/DataTable/DataTable'));
const DefaultTable = lazy(() => import('./components/pages/tables/DefaultTable/DefaultTable'));
const EditTable = lazy(() => import('./components/pages/tables/EditTable/EditTable'));

const Line = lazy(() => import('./components/Charts/ApexChart/Line/Line'));
const Area = lazy(() => import('./components/Charts/ApexChart/Area/Area'));
const Column = lazy(() => import('./components/Charts/ApexChart/Column/Column'));
const Bar = lazy(() => import('./components/Charts/ApexChart/Bar/Bar'));
const Mixed = lazy(() => import('./components/Charts/ApexChart/Mixed/Mixed'));
const CandleStick = lazy(() => import('./components/Charts/ApexChart/CandleStick/CandleStick'));
const Boxplot = lazy(() => import('./components/Charts/ApexChart/Boxplot/Boxplot'));
const Treemap = lazy(() => import('./components/Charts/ApexChart/Treemap/Treemap'));
const Pie = lazy(() => import('./components/Charts/ApexChart/Pie/Pie'));
const Radialbar = lazy(() => import('./components/Charts/ApexChart/Radialbar/Radialbar'));
const Radar = lazy(() => import('./components/Charts/ApexChart/Radar/Radar'));
const Polararea = lazy(() => import('./components/Charts/ApexChart/Polararea/Polararea'));

const Lines = lazy(() => import('./components/Charts/Echarts/Line/Lines'));
const Trees = lazy(() => import('./components/Charts/Echarts/Tree/Trees'));
const Scatters = lazy(() => import('./components/Charts/Echarts/Scatter/Scatters'));
const Timelines = lazy(() => import('./components/Charts/ApexChart/Timeline/Timelines'));
const CandleSticks = lazy(() => import('./components/Charts/Echarts/CandleSticks/CandleSticks'));
const Bars = lazy(() => import('./components/Charts/Echarts/Bars/Bars'));
const Widgets = lazy(() => import('./components/apps/Widgets/Widgets'));
const FormInputSpinners = lazy(() => import('./components/pages/forms/FormInputSpinners/FormInputSpinners'));
const CustomPage = lazy(() => import('./components/CustomPage'));
const Error400 = lazy(() => import('./components/Authentication/errorPage/Error400/Error400'));
const Error500 = lazy(() => import('./components/Authentication/errorPage/Error500/Error500'));
const Login = lazy(() => import('./components/Authentication/Login/Login'));
const AuthenticationPage = lazy(() => import('./components/AuthenticationPage'));
const ErrorPages = lazy(() => import('./components/ErrorPages'));
const Switcherapp = lazy(() => import("./components/Switcherapp"))
const Landing = lazy(() => import("./components/Landing"))

const AuthLogin = lazy(() => import('./components/Authentication/firebaseAuth/AuthLogin'));
const SignUp = lazy(() => import('./components/Authentication/firebaseAuth/Signup'));
const FrontOffice = lazy(()=> import('./components/FrontOffice/FrontOffice'));


const container: HTMLElement | any = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Fragment>
        <BrowserRouter>
          <React.Suspense fallback={<Loader />}>
            <Routes>

              <Route path={`/`} element={<Auth />}>
                <Route index element={<AuthLogin />} />
                <Route path={`/Authentication/firebaseAuth/login`} element={<AuthLogin />} />
                <Route path={`/Authentication/firebaseAuth/SignUp`} element={<SignUp />} />
              </Route>
              <Route path={``} element={<App />} >


                {/* Apps */}
                <Route>
                  <Route path={`/dashboard`} element={<Dashboard />} />
                  <Route path={`/frontoffice`} element={<FrontOffice />} />
                  <Route path={`/apps/carddesigns`} element={<CardsDesign />} />,
                  <Route path={`/apps/chat`} element={<Chat />} />,
                  <Route path={`/apps/charts`} element={<Charts />} />,
                  <Route path={`/apps/scrollbar`} element={<ContentScrollbar />} />,
                  <Route path={`/apps/counter`} element={<Counters />} />,
                  <Route path={`/apps/cryptocurrencies`} element={<CryptoCurrencies />} />,
                  <Route path={`/apps/defaultcalender`} element={<DefaultCalender />} />,
                  <Route path={`/apps/footer`} element={<Footers />} />,
                  <Route path={`/apps/fullcalender`} element={<FullCalender />} />,
                  <Route path={`/apps/loader`} element={<Loaders />} />,
                  <Route path={`/apps/notification`} element={<Notifications />} />,
                  <Route path={`/apps/rangeslider`} element={<RangeSlider />} />,
                  <Route path={`/apps/rating`} element={<Rating />} />,
                  <Route path={`/apps/search`} element={<Search />} />,
                  <Route path={`/apps/sweet`} element={<Sweet />} />,
                  <Route path={`/apps/timeline`} element={<Timeline />} />,
                  <Route path={`/apps/treeview`} element={<TreeView />} />,
                  <Route path={`/apps/userlist`} element={<Userlist />} />,
                  <Route path={`/apps/widgets`} element={<Widgets />} />,
                </Route>

                {/* bootstrap */}
                <Route>
                  <Route path={`/bootstrap/accordian`} element={<Accordians />} />,
                  <Route path={`/bootstrap/bootstrapalerts`} element={<BootstrapAlerts />} />,
                  <Route path={`/bootstrap/avatarradius`} element={<AvatarRadius />} />,
                  <Route path={`/bootstrap/avatarsquare`} element={<AvatarSquare />} />,
                  <Route path={`/bootstrap/avatarrounded`} element={<AvatarRounded />} />,
                  <Route path={`/bootstrap/badgespills`} element={<BadgesPills />} />,
                  <Route path={`/bootstrap/breadcrumbs`} element={<Breadcrumbs />} />,
                  <Route path={`/bootstrap/buttons`} element={<Buttons />} />,
                  <Route path={`/bootstrap/carousels`} element={<Carousels />} />,
                  <Route path={`/bootstrap/colors`} element={<Colors />} />,
                  <Route path={`/bootstrap/dropdowns`} element={<DropDowns />} />,
                  <Route path={`/bootstrap/listgroups`} element={<ListGroups />} />,
                  <Route path={`/bootstrap/mediaobject`} element={<MediaObject />} />,
                  <Route path={`/bootstrap/modal`} element={<Modals />} />,
                  <Route path={`/bootstrap/navigation`} element={<Navigation />} />,
                  <Route path={`/bootstrap/offcanvas`} element={<OffCanvas />} />,
                  <Route path={`/bootstrap/pagination`} element={<Pagination />} />,
                  <Route path={`/bootstrap/panels`} element={<Panels />} />,
                  <Route path={`/bootstrap/progress`} element={<Progress />} />,
                  <Route path={`/bootstrap/tabs`} element={<Tabs />} />,
                  <Route path={`/bootstrap/tags`} element={<Tags />} />,
                  <Route path={`/bootstrap/thumbnails`} element={<Thumbnails />} />,
                  <Route path={`/bootstrap/toast`} element={<Toast />} />,
                  <Route path={`/bootstrap/tooltippopover`} element={<TooltipPopover />} />,
                  <Route path={`/bootstrap/typography`} element={<Typography />} />,
                  <Route path={`/bootstrap/ribbons`} element={<Ribbons />} />,
                </Route>




                {/* Charts */}
                <Route>

                  <Route path={`/charts/chartjs`} element={<Chartjs />} />,

                  <Route path={`/charts/echart/lines`} element={<Lines />} />,
                  <Route path={`/charts/echart/bar`} element={<Bars />} />,
                  <Route path={`/charts/echart/candlestick`} element={<CandleSticks />} />,
                  <Route path={`/charts/echart/scatter`} element={<Scatters />} />,
                  <Route path={`/charts/echart/tree`} element={<Trees />} />,

                  <Route path={`/charts/apexchart/line`} element={<Line />} />,
                  <Route path={`/charts/apexchart/area`} element={<Area />} />,
                  <Route path={`/charts/apexchart/column`} element={<Column />} />,
                  <Route path={`/charts/apexchart/bar`} element={<Bar />} />,
                  <Route path={`/charts/apexchart/mixed`} element={<Mixed />} />,
                  <Route path={`/charts/apexchart/timeline`} element={<Timelines />} />,
                  <Route path={`/charts/apexchart/candlestick`} element={<CandleStick />} />,
                  <Route path={`/charts/apexchart/boxplot`} element={<Boxplot />} />,
                  <Route path={`/charts/apexchart/treemap`} element={<Treemap />} />,
                  <Route path={`/charts/apexchart/pie`} element={<Pie />} />,
                  <Route path={`/charts/apexchart/radialbar`} element={<Radialbar />} />,
                  <Route path={`/charts/apexchart/radar`} element={<Radar />} />,
                  <Route path={`/charts/apexchart/polararea`} element={<Polararea />} />,

                </Route>

                {/* E-commerce */}
                <Route>
                  <Route path={`/ecommerce/addproduct`} element={<AddProduct />} />,
                  <Route path={`/ecommerce/checkout`} element={<Checkout />} />,
                  <Route path={`/ecommerce/productdetails`} element={<ProductDetails />} />,
                  <Route path={`/ecommerce/shop`} element={<Shop />} />,
                  <Route path={`/ecommerce/shoppingcart`} element={<ShoppingCart />} />,
                  <Route path={`/ecommerce/wishlist`} element={<Wishlist />} />,
                </Route>

                {/* File-Manager */}
                <Route>
                  <Route path={`/filemanager/fileattachments`} element={<FileAttachments />} />,
                  <Route path={`/filemanager/filedetails`} element={<FileDetails />} />,
                  <Route path={`/filemanager/filemanager`} element={<FileManager />} />,
                  <Route path={`/filemanager/filemanagerlist`} element={<FileManagerList />} />,
                </Route>

                {/* Icons */}
                <Route>
                  <Route path={`/icons/bootstrapicons`} element={<BootstrapIcons />} />,
                  <Route path={`/icons/feathericons`} element={<FeatherIcons />} />,
                  <Route path={`/icons/flagicons`} element={<FlagIcons />} />,
                  <Route path={`/icons/fontawesome`} element={<FontAwesome />} />,
                  <Route path={`/icons/ionicicons`} element={<IonicIcons />} />,
                  <Route path={`/icons/materialdesignicons`} element={<MaterialDesignIcons />} />,
                  <Route path={`/icons/pe7icons`} element={<Pe7Icons />} />,
                  <Route path={`/icons/simplelineicons`} element={<SimpleLineIcons />} />,
                  <Route path={`/icons/themifyicons`} element={<ThemifyIcons />} />,
                  <Route path={`/icons/typiconsicons`} element={<TypiconsIcons />} />,
                  <Route path={`/icons/weathericons`} element={<WeatherIcons />} />,
                </Route>

                {/* Maps */}
                <Route>
                  <Route path={`/maps/leafletmaps`} element={<LeafletMaps />} />,
                  <Route path={`/maps/simplemaps`} element={<SimpleMaps />} />,
                </Route>

                {/* Pages */}
                <Route>
                  <Route path={`/pages/editprofile`} element={<Editprofile />} />,
                  <Route path={`/pages/extension/aboutcompany`} element={<AboutCompany />} />,
                  <Route path={`/pages/extension/blogdetails`} element={<BlogDetails />} />,
                  <Route path={`/pages/extension/blogpost`} element={<BlogPost />} />,
                  <Route path={`/pages/extension/blogs`} element={<Blogs />} />,
                  <Route path={`/pages/extension/emptypage`} element={<EmptyPage />} />,
                  <Route path={`/pages/extension/faqs`} element={<FAQS />} />,
                  <Route path={`/pages/extension/invoice`} element={<Invoice />} />,
                  <Route path={`/pages/extension/pricing`} element={<Pricing />} />,
                  <Route path={`/pages/extension/services`} element={<Services />} />,
                  <Route path={`/pages/extension/setting`} element={<Settings />} />,
                  <Route path={`/pages/extension/term`} element={<Terms />} />,
                  <Route path={`/pages/forms/formadvanced`} element={<FormAdvanced />} />,
                  <Route path={`/pages/forms/formeditor`} element={<FormEditor />} />,
                  <Route path={`/pages/forms/formelements`} element={<FormElements />} />,
                  <Route path={`/pages/forms/formlayouts`} element={<FormLayouts />} />,
                  <Route path={`/pages/forms/formvalidation`} element={<FormValidation />} />,
                  <Route path={`/pages/forms/forminputspinner`} element={<FormInputSpinners />} />,
                  <Route path={`/pages/forms/formwizard`} element={<FormWizard />} />,
                  <Route path={`/pages/gallery`} element={<Gallery />} />,
                  <Route path={`/pages/mailcompose`} element={<MailCompose />} />,
                  <Route path={`/pages/mailinbox`} element={<MailInbox />} />,
                  <Route path={`/pages/mailread`} element={<MailRead />} />,
                  <Route path={`/pages/notificationlist`} element={<NotificationList />} />,
                  <Route path={`/pages/profile`} element={<Profile />} />,

                  <Route path={`/pages/tables/datatables`} element={<DataTable />} />,

                  <Route path={`/pages/tables/edittables`} element={<EditTable />} />,
                </Route>
                <Route>
                  <Route path={`/pages/tables/defaulttables`} element={<DefaultTable />} />,
                </Route>
              </Route>

              {/* Authentication Pages */}
              <Route path={`/`} element={<AuthenticationPage />}>
                <Route path={`/authentication/login`} element={<Login />} />
                <Route path={`/authentication/register`} element={<Register />} />
                <Route path={`/authentication/forgotpassword`} element={<ForgotPassword />} />
                <Route path={`/authentication/lockscreen`} element={<LockScreen />} />,
              </Route>

              {/* Custom Pages for UnderConstruction */}

              <Route path={`/`} element={<CustomPage />}>
                <Route path={`/pages/extension/underconstruction`} element={<UnderConstruction />} />
              </Route>

              {/* Authentication Error Pages */}
              <Route path={``} element={<ErrorPages />}>
                <Route path={`/authentication/errorpage/error400`} element={<Error400 />} />
                <Route path={`/authentication/errorpage/error401`} element={<Error401 />} />
                <Route path={`/authentication/errorpage/error403`} element={<Error403 />} />
                <Route path={`/authentication/errorpage/error404`} element={<Error404 />} />
                <Route path={`/authentication/errorpage/error500`} element={<Error500 />} />
                <Route path={`/authentication/errorpage/error503`} element={<Error503 />} />,
              </Route>
              {/* Firebase Authentication */}


              <Route>
                <Route path={`/pages/switcher/switcherstyle1`} element={<Switcherapp />} />,
              </Route>
              <Route >
                <Route path={`/landingPage/landingPage`} element={<Landing />} />
              </Route>
              <Route path="*" element={<Error500 />} />

            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </Fragment>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
