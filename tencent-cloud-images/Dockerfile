FROM centos:7.2.1511
MAINTAINER zephyraft <zzzzzzzephyr@gmail.com>

RUN yum -y update
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum clean all && yum makecache fast
RUN yum install -y gcc-c++ make
RUN yum install -y nodejs

RUN mkdir -p /var/task
WORKDIR /var/task
ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/var/lang/bin
ENTRYPOINT ["npm", "install"]
