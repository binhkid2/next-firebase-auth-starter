
import Profile from '@/components/Profile';
import ProtectedRoute from '@/components/ProtectedRoute';

const ProfilePage = () => {
   
  return (
   
<ProtectedRoute>
    <Profile/>
</ProtectedRoute>
  )
}

export default ProfilePage