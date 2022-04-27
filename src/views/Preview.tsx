export const Preview: React.FC = () => {
  const balletSpeedList = [1, 2, 3, 4];
  const balletMsgs = [
    'wwww',
    '8888',
    '★―＝≡ ☆―＝≡ ★―＝≡ ☆―＝≡ ★―＝≡ ☆―＝≡',
    '★･ﾟ･｡･ﾟ ☆･ﾟ･｡･ﾟ',
    '✪═━┈┈ ✰═━┈┈✪═━┈┈ ✰═━┈┈✪═━┈┈ ✰═━┈┈',
    '▂▃▅▆▇██▇▆▅▃▂▂▃▅▆▇██▇▆▅▃▂▂▃▅▆▇██▇▆▅▃▂',
  ];
  const balletConfig = {
    max: 30,
  };

  const ballets = [...new Array(balletConfig.max)].map((_) => ({
    balletMsg: balletMsgs[Math.floor(Math.random() * balletMsgs.length)],
    balletSpeed:
      balletSpeedList[Math.floor(Math.random() * balletSpeedList.length)],
  }));

  console.log(ballets);

  return (
    <div className="mx-auto w-md-2/5 border-4 border-emerald-100 overflow-hidden">
      {ballets.map(({ balletSpeed, balletMsg }, i) => (
        <p key={i} className={`text-base animate-flow-text-${balletSpeed}`}>
          {balletMsg}
        </p>
      ))}
    </div>
  );
};
