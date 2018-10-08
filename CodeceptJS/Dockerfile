FROM codeception/codeceptjs

COPY ./ /codecept

#RUN ln -s  /codecept/bin/codecept.js  /usr/local/bin/codeceptjs 
#RUN mkdir /tests
WORKDIR /tests

#ENV CODECEPT_ARGS=--debug

#ENV HOST=selenium


RUN cd /tests/
CMD codeceptjs run --steps 


