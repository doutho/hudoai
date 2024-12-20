import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { type LanguageOption, languageOptions } from './LanguageSelector';

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLanguageSelect: (option: LanguageOption) => void;
}

const WelcomeDialog = ({ open, onOpenChange, onLanguageSelect }: WelcomeDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Select Your Language
          </DialogTitle>
          <DialogDescription>
            Please select your preferred language
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {languageOptions.map((option) => (
            <Button
              key={option.code}
              onClick={() => {
                onLanguageSelect(option);
                onOpenChange(false);
              }}
              variant="outline"
              className="w-full"
            >
              {option.label}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;