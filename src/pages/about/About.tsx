import { Outlet } from 'react-router-dom';
import { PageWrapper } from '../../shared/ui/PageWrapper/PageWrapper';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      <div>
        {t('about')}
        <Outlet />
      </div>
    </PageWrapper>
  );
};
