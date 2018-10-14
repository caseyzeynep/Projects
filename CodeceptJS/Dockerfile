FROM codeception/codeceptjs

COPY ./ /codecept

#RUN mkdir /tests

WORKDIR /tests

RUN cd /tests/

CMD codeceptjs run-multiple parallel


