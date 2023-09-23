import React from "react";

type Props = {
  providerName: string;
  providerImageSrc?: string;
};

const ProviderSmall: React.FC<Props> = ({ providerName, providerImageSrc }) => {
  return (
    <div className="flex items-center space-x-2">
      {providerImageSrc && (
        <div>
          <img
            src={providerImageSrc}
            className="h-[32px] w-[32px] object-cover"
          />
        </div>
      )}
      <h5 className="text-sm font-semibold">{providerName}</h5>
    </div>
  );
};

export default ProviderSmall;
