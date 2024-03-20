import { Outlet } from 'react-router-dom';
import { PageWrapper } from '../../shared/ui/PageWrapper/PageWrapper';

export const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <div>
        PrivacyPolicy
        <Outlet />
      </div>
    </PageWrapper>
  );
};
