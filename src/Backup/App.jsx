const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Guest = React.lazy(() => import("./pages/guest/Guest"));

<Route element={<GuestLayout />}>
  <Route path="/guest" element={<Guest />} />
</Route>