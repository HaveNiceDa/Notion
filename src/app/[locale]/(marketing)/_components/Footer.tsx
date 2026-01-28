import { Button } from "@/src/components/ui/button";
import { Logo } from "./Logo";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Marketing");
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div
        className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2
        text-muted-foreground"
      >
        <Button variant="ghost" size="sm">
          {t('privacyPolicy')}
        </Button>
        <Button variant="ghost" size="sm">
          {t('termsConditions')}
        </Button>
      </div>
    </div>
  );
}
